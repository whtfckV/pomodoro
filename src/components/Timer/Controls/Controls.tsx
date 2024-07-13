import { FC, useEffect, useState } from "react";
import { Btn } from "src/components/Btn";
import { StopBtn } from "./StopBtn";
import styles from './Controls.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { setIsStarted, setIsWorking } from "src/store/timerSlice";

export const Controls: FC = () => {
  const [btnDescr, setBtnDescr] = useState('Старт');
  const { isWorking, isStarted } = useAppSelector(state => state.timer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isStarted) {
      setBtnDescr('Старт')
      return
    }
    if (isWorking) {
      setBtnDescr('Пауза')
    } else {
      setBtnDescr('Продолжить')
    }

  }, [isStarted, isWorking])

  const handleTimer = () => {
    if (!isStarted) {
      dispatch(setIsStarted(true))
    }

    dispatch(setIsWorking(!isWorking));
  }

  return (
    <div className={styles.controls}>
      <Btn onClick={() => handleTimer()}>{btnDescr}</Btn>
      <StopBtn isStarted={isStarted} />
    </div>
  );
};
