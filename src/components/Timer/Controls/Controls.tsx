import { FC, useEffect, useState } from "react";
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
      <Btn onClick={ }>{getIncription()}</Btn>
      <StopBtn />
    </div>
  );
};
