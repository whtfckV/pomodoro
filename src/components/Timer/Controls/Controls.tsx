import { FC, useEffect, useState } from "react";
import { Btn } from "src/components/Btn";
import { StopBtn } from "./StopBtn";
import styles from './Controls.module.css'
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { setIsStarted, setIsWorking } from "src/store/timerSlice";

type Props = {
  stop: () => void;
  skip: () => void;
  done: () => void;
}

export const Controls: FC<Props> = ({ stop, skip, done }) => {
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

  const handleClick = () => {
    if (!isStarted) {
      dispatch(setIsStarted(true))
    }

    dispatch(setIsWorking(!isWorking));
  }

  return (
    <div className={styles.controls}>
      <Btn onClick={() => handleClick()}>{btnDescr}</Btn>
      <StopBtn stop={stop} skip={skip} done={done} />
    </div>
  );
};
