import { FC, useEffect, useState } from "react";
import { TaskNumber } from "./TaskNumber";
import { Time } from "./Time";
import { Controls } from "./Controls";
import { BREAK_TIME, ONE_MINUTE, ONE_SECOND, WORK_TIME } from "src/store/constants";
import styles from './Timer.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { increaseCurrentTomato, resetTimer, setIsBreak, setIsStarted, setIsWorking } from "src/store/timerSlice";
import { removeTodo } from "src/store/todoSlice";
import { addOneStop, addTomatoes, addWorkingTime } from "src/store/statisticsSlice";

export const Timer: FC = () => {
  const [time, setTime] = useState(WORK_TIME)
  const [workTimeWithPlus, setWorkTimeWithPlus] = useState(WORK_TIME);
  const { isWorking, isBreak, currentTomato, isStarted } = useAppSelector(state => state.timer)
  const currentTask = useAppSelector(state => state.todos.todos[0])
  const dispatch = useAppDispatch()

  const tick = () => {
    setTime(time => time - ONE_SECOND)
  }

  useEffect(() => {
    if (currentTomato > currentTask.tomatos) {
      setTime(WORK_TIME)
      dispatch(removeTodo(currentTask.id))
      dispatch(resetTimer())
    }
  }, [currentTomato, currentTask, dispatch])

  useEffect(() => {
    if (time === BREAK_TIME && !isWorking) {
      dispatch(setIsBreak(true))
    }
    if (time === WORK_TIME && !isWorking) {
      dispatch(setIsBreak(false))
    }
  }, [time, isWorking, dispatch])

  useEffect(() => {
    if (time === 0) {
      if (isBreak) {
        dispatch(increaseCurrentTomato())
        dispatch(addWorkingTime(workTimeWithPlus))
        dispatch(addTomatoes(1))
        dispatch(setIsStarted(false))
        setTime(WORK_TIME)
      } else {
        setTime(BREAK_TIME)
      }
      dispatch(setIsWorking(false))
    }
  }, [time, dispatch, isBreak, workTimeWithPlus])

  useEffect(() => {
    if (!isWorking) {
      if (isStarted) {
        // нужно считать где-то тут время на паузе
        console.log('%cHERE', "color: yellow")
      }
      return
    } else {
      const timerId = setInterval(tick, ONE_SECOND / 500)
      return () => clearInterval(timerId)
    }
  }, [isWorking, dispatch, isBreak, time, isStarted])

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
    setTime(time => time + ONE_MINUTE)
    setWorkTimeWithPlus(allTime => allTime + ONE_MINUTE)
  }

  return (
    <div className={styles.timer}>
      <Time time={time} addTime={handlePlus} isWorking={isWorking} isBreak={isBreak} />
      <TaskNumber />
      <Controls stop={handleStop} skip={handleSkipPause} done={handleDone} />
    </div>
  );
};
