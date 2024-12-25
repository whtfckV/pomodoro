import { FC, useEffect, useState } from "react";
import { Btn } from "src/components/Btn";
import { StopBtn } from "./StopBtn";
import styles from './Controls.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { contin, pause, start } from "src/store/timerSlice";

type Props = {
  stop: () => void;
  skip: () => void;
  done: () => void;
}

export const Controls: FC<Props> = ({ stop, skip, done }) => {
  const dispatch = useAppDispatch()
  const [btnDescr, setBtnDescr] = useState('Старт');
  const { isPause, isStarted, isBreak } = useAppSelector(state => state.timer)

  useEffect(() => {
    if (!isStarted || (isBreak && isPause)) {
      setBtnDescr('Старт')
      return
    }
    if (!isPause) {
      setBtnDescr('Пауза')
    } else {
      setBtnDescr('Продолжить')
    }

  }, [isStarted, isPause])

  const handleClick = () => {
    if (!isStarted) {
      dispatch(start())
    } else if (!isPause) {
      dispatch(pause())
    } else {
      dispatch(contin())
    }
  }

  return (
    <div className={styles.controls}>
      <Btn onClick={handleClick}>{btnDescr}</Btn>
      <StopBtn stop={stop} skip={skip} done={done} />
    </div>
  );
};
