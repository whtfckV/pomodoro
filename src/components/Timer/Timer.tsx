import { FC, useEffect, useState } from "react";
import { TaskNumber } from "./TaskNumber";
import { Time } from "./Time";
import { Controls } from "./Controls";
import { BREAK_TIME, ONE_MINUTE, ONE_SECOND, WORK_TIME } from "src/store/constants";
import styles from './Timer.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { increaseCurrentTomato, resetTimer, setIsBreak, setIsWorking } from "src/store/timerSlice";
import { removeTodo } from "src/store/todoSlice";

export const Timer: FC = () => {
  const [time, setTime] = useState(WORK_TIME)
  const { isWorking, isBreak, currentTomato } = useAppSelector(state => state.timer)
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
        setTime(WORK_TIME)
        dispatch(increaseCurrentTomato())
      } else {
        setTime(BREAK_TIME)
      }
      dispatch(setIsWorking(false))
    }
  }, [time, dispatch, isBreak])

  useEffect(() => {
    if (!isWorking) {
      return
    } else {
      const timerId = setInterval(tick, ONE_SECOND / 500)
      return () => clearInterval(timerId)
    }
  }, [isWorking, dispatch, isBreak, time])

  const handlePlus = () => {
    setTime(time => time + ONE_MINUTE)
  }

  return (
    <div className={styles.timer}>
      <Time time={time} addTime={handlePlus} />
      <TaskNumber />
      <Controls />
    </div>
  );
};
