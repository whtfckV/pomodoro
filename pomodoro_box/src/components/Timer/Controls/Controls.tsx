import { FC, useState } from "react";
import { Btn } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { pauseTimer, decriseSecond, startTimer, setTimerId, EProgress } from "src/store/timerSlice";
import { StopBtn } from "./StopBtn";
import styles from './Controls.module.css'

interface IControlsProps { }

// Че то не могу допереть как сделать номрально что бы нужный обработчик события был
export const Controls: FC<IControlsProps> = () => {
  const progress = useAppSelector(state => state.timer.progress)
  const dispatch = useAppDispatch()
  const [onPause, setOnPause] = useState<boolean>(true)

  const handleStart = () => {
    dispatch(startTimer())
    dispatch(setTimerId(window.setInterval(() => {
      dispatch(decriseSecond())
    }, 1000)))
  }

  const handlePause = () => {
    dispatch(pauseTimer())
  }

  const getIncription = () => {
    switch (progress) {
      case EProgress.breakPause:
      case EProgress.workPause:
        setOnPause(true)
        return 'Продолжить'
      case EProgress.break:
      case EProgress.work:
        setOnPause(false)
        return 'Пауза'
      default:
        setOnPause(true)
        return 'Старт'
    }
  }


  return (
    <div className={styles.controls}>
      <Btn onClick={onPause ? handleStart : handlePause}>{getIncription()}</Btn>
      <StopBtn />
    </div>
  );
};
