import { FC } from "react";
import { Btn } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { pauseTimer, decriseSecond, startTimer, setTimerId, EProgress } from "src/store/timerSlice";
import { StopBtn } from "./StopBtn";
import styles from './Controls.module.css'

interface IControlsProps { }

export const Controls: FC<IControlsProps> = () => {
  const progress = useAppSelector(state => state.timer.progress)
  const state = useAppSelector(state => state.timer.works)
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

  const handle = state == 'off' ? handleStart : handlePause

  const getInscription = () => {
    switch (progress) {
      case EProgress.breakPause:
      case EProgress.workPause:
        return 'Продолжить'
      case EProgress.break:
      case EProgress.work:
        return 'Пауза'
      default:
        return 'Старт'
    }
  }

  return (
    <div className={styles.controls}>
      <Btn onClick={handle}>{getInscription()}</Btn>
      <StopBtn />
    </div>
  );
};
