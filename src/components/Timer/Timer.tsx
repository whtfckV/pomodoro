import { FC, useEffect, useState } from "react";
import { TaskNumber } from "./TaskNumber";
import { Time } from "./Time";
import { Controls } from "./Controls";
import { ONE_MINUTE, ONE_SECOND, WORK_TIME } from "src/store/constants";
import styles from './Timer.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { setIsWorking } from "src/store/timerSlice";

export const Timer: FC = () => {
  const [time, setTime] = useState(WORK_TIME)
  const isWorking = useAppSelector(state => state.timer.isWorking)
  // const isBreak = useAppSelector(state => state.timer.isBreak)
  const dispatch = useAppDispatch()

  const tick = () => {
    setTime(time => time - ONE_SECOND)
  }

  // useEffect(() => {
  //   if (!isBreak) {
  //     dispatch(setIsBreak(true))
  //     setTime(BREAK_TIME)
  //   } else {
  //     dispatch(setIsBreak(false))
  //     setTime(WORK_TIME)
  //   }
  // }, [isBreak, dispatch])

  useEffect(() => {
    if (time === 0) {
      // Вызвать звук завершения работы
      dispatch(setIsWorking(false))
    }
  }, [time, dispatch])

  useEffect(() => {
    if (!isWorking) {
      return
    } else {
      const timerId = setInterval(tick, ONE_SECOND / 100)
      return () => clearInterval(timerId)
    }
  }, [isWorking])

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
