import { FC, useCallback, useEffect, useState } from "react";
import { TaskNumber } from "./TaskNumber";
import { Time } from "./Time";
import { Controls } from "./Controls";
import { BREAK_TIME, ONE_MINUTE, ONE_SECOND, WORK_TIME } from "src/store/constants";
import styles from './Timer.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { increaseCurrentTomato, resetTimer, setIsBreak, setIsStarted, setIsWorking } from "src/store/timerSlice";
import { removeTodo } from "src/store/todoSlice";
import { addBreakTime, addOneStop, addPauseBreakTime, addPauseWorkTime, addTomatoes, addWorkingTime } from "src/store/statisticsSlice";

export const Timer: FC = () => {
  const [time, setTime] = useState(WORK_TIME)
  const [pauseTime, setPauseTime] = useState(0);
  const [timeWithPlus, setTimeWithPlus] = useState(WORK_TIME);
  const { isWorking, isBreak, currentTomato, isStarted } = useAppSelector(state => state.timer)
  const currentTask = useAppSelector(state => state.todos.todos[0])
  const dispatch = useAppDispatch()

  const tick = () => {
    setTime(oldTime => oldTime - ONE_SECOND)
  }

  const tickPause = useCallback(() => {
    setPauseTime(oldPauseTime => oldPauseTime + ONE_SECOND)
  }, [])

  useEffect(() => {
    if (currentTomato > currentTask.tomatoes) {
      setTime(WORK_TIME)
      dispatch(removeTodo(currentTask.id))
      dispatch(resetTimer())
    }
  }, [currentTomato, currentTask, dispatch])

  useEffect(() => {
    if (time === BREAK_TIME && !isWorking) {
      dispatch(setIsBreak(true))
      dispatch(setIsStarted(false))

      dispatch(addPauseWorkTime(pauseTime))
      setPauseTime(0)
    }
    if (time === WORK_TIME && !isWorking) {
      dispatch(setIsBreak(false))

      dispatch(addPauseBreakTime(pauseTime))
      setPauseTime(0)
    }
  }, [time, isWorking, dispatch, pauseTime])

  useEffect(() => {
    if (time === 0) {
      if (isBreak) {
        dispatch(increaseCurrentTomato())
        dispatch(addBreakTime(timeWithPlus))
        dispatch(addTomatoes(1))
        dispatch(setIsStarted(false))
        setTime(WORK_TIME)
        setTimeWithPlus(WORK_TIME)
      } else {
        dispatch(addWorkingTime(timeWithPlus))
        setTimeWithPlus(BREAK_TIME)
        setTime(BREAK_TIME)
      }
      dispatch(setIsWorking(false))
    }
  }, [time, dispatch, isBreak, timeWithPlus])

  useEffect(() => {
    if (!isWorking) {
      if (isStarted && !isBreak) {
        const timerId = setInterval(tickPause, ONE_SECOND / 500)
        return () => clearInterval(timerId)
      }
      if (isStarted && isBreak) {
        const timerId = setInterval(tickPause, ONE_SECOND / 500)
        return () => clearInterval(timerId)
      }
      return
    } else {
      const timerId = setInterval(tick, ONE_SECOND / 500)
      return () => clearInterval(timerId)
    }
  }, [isWorking, dispatch, isBreak, time, isStarted, tickPause])

  const handleStop = () => {
    dispatch(setIsWorking(false))
    dispatch(setIsStarted(false))
    dispatch(addOneStop())
    setTime(WORK_TIME)
  }

  const handleSkipPause = () => {
    setTime(0)
  }

  const handleDone = () => {
    dispatch(removeTodo(currentTask.id))
    dispatch(resetTimer())
    setTime(WORK_TIME)
  }

  const handlePlus = () => {
    setTime(oldTime => oldTime + ONE_MINUTE)
    setTimeWithPlus(allTime => allTime + ONE_MINUTE)
  }

  return (
    <div className={styles.timer}>
      <Time time={time} addTime={handlePlus} isWorking={isWorking} isBreak={isBreak} />
      <TaskNumber />
      <Controls stop={handleStop} skip={handleSkipPause} done={handleDone} />
    </div>
  );
};
