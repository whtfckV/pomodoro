import { FC, useEffect, useState } from "react";
import { Btn } from "src/components/Btn";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { pauseTimer, decriseSecond, startTimer, setTimerId, EStatus } from "src/store/timerSlice";
import { StopBtn } from "./StopBtn";
import styles from './Controls.module.css'
import { addSecondWork } from "src/store/statisticsSlice";

export const Controls: FC = () => {
  const status = useAppSelector(state => state.timer.status)
  const dispatch = useAppDispatch()
  const [startBtnText, setStartBtnText] = useState<string>('Старт')

  useEffect(() => {
    setStartBtnText(getIncription(status))
  }, [status])

  const getIncription = (statusType: EStatus) => {
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

  const handleStart = () => {
    dispatch(startTimer())
    dispatch(setTimerId(window.setInterval(() => {
      dispatch(decriseSecond())
      dispatch(addSecondWork(status))

      // Change this to 1000 milliseconds
    }, 10)))
  }

  const handlePause = () => {
    dispatch(pauseTimer())
  }

  const handleTimer = (statusType: EStatus) => {
    switch (statusType) {
      case EStatus.breakPause:
      case EStatus.workPause:
        handleStart()
        break;
      case EStatus.break:
      case EStatus.work:
        handlePause()
        break;
      default:
        handleStart()
        break;
    }
  }

  return (
    <div className={styles.controls}>
      <Btn onClick={() => handleTimer(status)}>{startBtnText}</Btn>
      <StopBtn />
    </div>
  );
};
