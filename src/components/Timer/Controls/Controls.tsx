import { FC } from "react";
import { Btn } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { pauseTimer, decriseSecond, startTimer, setTimerId, EStatus } from "src/store/timerSlice";
import { StopBtn } from "./StopBtn";
import styles from './Controls.module.css'
import { addSecondWork } from "src/store/statisticsSlice";

export const Controls: FC = () => {
  const { status, working } = useAppSelector(state => state.timer)
  const dispatch = useAppDispatch()

  const getIncription = (statusType: EStatus, isWorking: boolean) => {
    if (!isWorking) return 'Старт'

    switch (statusType) {
      case EStatus.breakPause:
      case EStatus.workPause:
        return 'Продолжить'
      case EStatus.break:
      case EStatus.work:
        return 'Пауза'
      default:
        return 'Старт'
    }
  }

  const handleStart = (statusType: EStatus) => {
    dispatch(startTimer())
    dispatch(setTimerId(window.setInterval(() => {
      dispatch(decriseSecond())
      if (![EStatus.break, EStatus.breakPause].includes(statusType)) {
        dispatch(addSecondWork(status))
      }

      // Change this to 1000 milliseconds
    }, 10)))
  }

  const handlePause = () => {
    dispatch(pauseTimer())
  }

  const handleTimer = (statusType: EStatus, isWorking: boolean) => {
    if (!isWorking) {
      handleStart(statusType)
      return
    }

    switch (statusType) {
      case EStatus.breakPause:
      case EStatus.workPause:
        handleStart(statusType)
        break;
      case EStatus.break:
      case EStatus.work:
        handlePause()
        break;
      default:
        handleStart(statusType)
        break;
    }
  }

  return (
    <div className={styles.controls}>
      <Btn onClick={() => handleTimer(status, working)}>{getIncription(status, working)}</Btn>
      <StopBtn />
    </div>
  );
};
