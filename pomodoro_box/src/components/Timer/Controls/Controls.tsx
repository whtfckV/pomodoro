import { FC } from "react";
import { Btn, EType } from "src/components/Btn";
import styles from './Controls.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { EState, pauseTimer, decriseSecond, startTimer, stopTimer, setTimerId } from "src/store/timerSlice";

interface IControlsProps {
}

export const Controls: FC<IControlsProps> = () => {
  const timerState = useAppSelector(state => state.timer.timerState)
  const dispatch = useAppDispatch()

  const handleStart = () => {
    dispatch(startTimer())
    dispatch(setTimerId(window.setInterval(() => {
      dispatch(decriseSecond())
    }, 1000)))
  }

  const handlePause = () => {
    dispatch(pauseTimer())
  }

  const handleStop = () => {
    dispatch(stopTimer())
  }

  const getHandle = () => {
    switch (timerState) {
      case EState.off:
      case EState.workPause:
      case EState.breakPause:
        return handleStart
      case EState.work:
        return handlePause
      default:
        return () => { }
    }
  }

  const getInscription = () => {
    switch (timerState) {
      case EState.off:
        return 'Старт'
      case EState.workPause:
      case EState.breakPause:
        return 'Продолжить'
      case EState.work:
      case EState.break:
        return 'Пауза'
    }
  }


  return (
    <div className={styles.controls}>
      <Btn onClick={getHandle()}>{getInscription()}</Btn>
      <Btn onClick={handleStop} styleType={EType.grey}>Стоп</Btn>
    </div>
  );
};
