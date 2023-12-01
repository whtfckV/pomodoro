import { FC, useEffect, useState } from "react";
import { Btn } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { pauseTimer, decriseSecond, startTimer, setTimerId, EProgress } from "src/store/timerSlice";
import { StopBtn } from "./StopBtn";
import styles from './Controls.module.css'

interface IControlsProps { }

export const Controls: FC<IControlsProps> = () => {
  const progress = useAppSelector(state => state.timer.progress)
  const dispatch = useAppDispatch()
  const [startBtnText, setStartBtnText] = useState<string>('Старт')

  useEffect(() => {
    setStartBtnText(getIncription(progress!))
  }, [progress])

  const getIncription = (progressType: EProgress) => {
    switch (progressType) {
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

  const handleStart = () => {
    dispatch(startTimer())
    dispatch(setTimerId(window.setInterval(() => {
      dispatch(decriseSecond())
    }, 1000)))
  }

  const handlePause = () => {
    dispatch(pauseTimer())
  }

  const handleTimer = (progressType: EProgress) => {
    switch (progressType) {
      case EProgress.breakPause:
      case EProgress.workPause:
        handleStart()
        break;
      case EProgress.break:
      case EProgress.work:
        handlePause()
        break;
      default:
        handleStart()
        break;
    }
  }

  return (
    <div className={styles.controls}>
      <Btn onClick={() => handleTimer(progress!)}>{startBtnText}</Btn>
      <StopBtn />
    </div>
  );
};
