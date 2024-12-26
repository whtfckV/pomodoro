import { FC, useCallback, useEffect, useState } from "react";
import { TaskNumber } from "./TaskNumber";
import { Time } from "./Time";
import { Controls } from "./Controls";
import { BREAK_TIME, ONE_MINUTE, ONE_SECOND, WORK_TIME } from "src/store/constants";
import styles from './Timer.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { nextTomato, resetTimer, startBreak, stopTimer } from "src/store/timerSlice";
import { removeTodo } from "src/store/todoSlice";
// import { addPauseBreakTime, addTomatoes } from "src/store/statisticsSlice";

// ЗАПИСЫВАТЬ ОТРАБОТАННОЕ ВРЕМЯ В ОТДЕЛЬНЫЙ СТЕЙТ
// ДЕРЖАТЬ ВРЕМЯ КОТОРОЕ ТИКАЕТ С ПЛЮСОМ В time
// ТОГДА ВСЕ БУДЕТ РАБОТАТЬ НОМРАЛЬНО И СОБИРАТЬСЯ КОРРЕКТНАЯ СТАТИСТИКА
// -----------------------------------------------
// СЕЙЧАС НЕ СЧИТАЕТСЯ ВРЕМЯ НА ПАУЗЕ (КОРРЕКТНО) :(
export const Timer: FC = () => {
  const dispatch = useAppDispatch()
  const [time, setTime] = useState(WORK_TIME)
  // const [pauseTime, setPauseTime] = useState(0)
  // const [pastTime, setPastTime] = useState(0)
  const { isPause, isBreak, currentTomato, isStarted } = useAppSelector(state => state.timer)
  const currentTask = useAppSelector(state => state.todos.todos[0])

  const tick = () => {
    setTime(oldTime => oldTime - ONE_SECOND)
  }

  // const tickPause = useCallback(() => {
  //   setPauseTime(oldPauseTime => oldPauseTime + ONE_SECOND)
  // }, [])

  const resetTimerState = useCallback(() => {
    setTime(WORK_TIME);
    // setTimeWithPlus(WORK_TIME);
    // dispatch(setIsBreak(false));
    // setPauseTime(0);
  }, []);

  useEffect(() => {
    if (currentTomato > currentTask.tomatoes) {
      resetTimerState()
      dispatch(removeTodo(currentTask.id))
      dispatch(resetTimer())
    }
  }, [currentTomato, currentTask, dispatch, resetTimerState])

  useEffect(() => {
    if (time === 0) {
      if (isBreak) {
        setTime(WORK_TIME)
        return () => {
          dispatch(nextTomato())
        }
      } else {
        setTime(BREAK_TIME)
        // React обновляет время после смены состояния, если есть решение надо переделать
        // setTimeout(() => {
        //   dispatch(startBreak())
        // }, 0)
        // Сделал так, но все еще не уверен в том насколько это правильно, но проблема решилась
        return () => {
          dispatch(startBreak())
        }
      }
      // if (isBreak) {
      // dispatch(increaseCurrentTomato())
      // dispatch(addBreakTime(timeWithPlus))
      //   // dispatch(setIsStarted(false))
      //   setTime(WORK_TIME)
      //   setTimeWithPlus(WORK_TIME)
      // } else {
      //   dispatch(addWorkingTime(timeWithPlus))
      //   setTimeWithPlus(BREAK_TIME)
      //   setTime(BREAK_TIME)
      // }
    }
  }, [time, dispatch, isBreak])

  // ЕБАНИНА С ЛОГИКОЙ
  useEffect(() => {
    if (!isStarted) return
    // if (isPause) {
    //   if (isStarted && !isBreak) {
    //     const timerId = setInterval(tickPause, ONE_SECOND / 50)
    //     return () => clearInterval(timerId)
    //   }
    //   if (isStarted && isBreak) {
    //     const timerId = setInterval(tickPause, ONE_SECOND / 50)
    //     return () => clearInterval(timerId)
    //   }
    // } else {
    //   const timerId = setInterval(tick, ONE_SECOND / 50)
    //   return () => clearInterval(timerId)
    // }
    if (!isPause) {
      const timerId = setInterval(tick, ONE_SECOND / 500)
      return () => clearInterval(timerId)
    }
  }, [isStarted, isPause])

  const handleStop = () => {
    dispatch(stopTimer())
    setTime(WORK_TIME)
    // dispatch(addOneStop())
    // dispatch(addWorkingTime(timeWithPlus - time))
    // dispatch(addPauseWorkTime(pauseTime))
    // resetTimerState()
  }

  const handleSkipPause = () => {
    dispatch(nextTomato())
    setTime(WORK_TIME)
    // dispatch(addBreakTime(timeWithPlus - time))
    // dispatch(addPauseBreakTime(pauseTime))
    // dispatch(increaseCurrentTomato())
    // dispatch(addTomatoes(1))
    // dispatch(setIsStarted(false))
    // dispatch(setIsBreak(false))
    // resetTimerState()
  }

  const handleDone = () => {
    // dispatch(done(currentTask.id))
    dispatch(removeTodo(currentTask.id))
    // dispatch(resetTimer())
    // resetTimerState()
  }

  const handlePlus = () => {
    setTime(oldTime => oldTime + ONE_MINUTE)
    // setTimeWithPlus(allTime => allTime + ONE_MINUTE)
  }

  return (
    <div className={styles.timer}>
      <Time time={time} addTime={handlePlus} isPause={isPause} isBreak={isBreak} isStarted={isStarted} />
      <TaskNumber />
      <Controls stop={handleStop} skip={handleSkipPause} done={handleDone} />
    </div>
  );
};
