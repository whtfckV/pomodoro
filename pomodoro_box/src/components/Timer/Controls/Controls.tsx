import { FC, useState } from "react";
import { Btn, EType } from "src/components/Btn";
import styles from './Controls.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { EState, pauseTimer, decriseSecond, startTimer, stopTimer } from "src/store/timerSlice";

interface IControlsProps {
}

export const Controls: FC<IControlsProps> = () => {
  const [timerId, setTimerId] = useState<null | number>(null)
  const timerState = useAppSelector(state => state.timer.timerState)
  const dispatch = useAppDispatch()

  const handleStart = () => {
    dispatch(startTimer())
    setTimerId(window.setInterval(() => {
      dispatch(decriseSecond())
    }, 1000))
  }

  const handlePause = () => {
    if (!timerId) return
    dispatch(pauseTimer(timerId))
  }

  const handleStop = () => {
    if (!timerId) return
    dispatch(stopTimer(timerId))
  }

  const isTimerOff = () => timerState === EState.off


  return (
    <div className={styles.controls}>
      <Btn onClick={isTimerOff() ? handleStart : handlePause}>{isTimerOff() ? 'Старт' : 'Пауза'}</Btn>
      <Btn onClick={handleStop} styleType={EType.grey}>Стоп</Btn>
    </div>
  );
};
