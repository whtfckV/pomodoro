import { FC } from "react";
import { Btn, EType } from "src/components/Btn";
import styles from './Controls.module.css'
import { useAppDispatch } from "src/store/hooks";
import { startTimer } from "src/store/timerSlice";

interface IControlsProps {
}

export const Controls: FC<IControlsProps> = () => {
  const dispatch = useAppDispatch()

  const handleStart = () => {
    dispatch(startTimer())
  }

  return (
    <div className={styles.controls}>
      <Btn onClick={handleStart}>Старт</Btn>
      <Btn styleType={EType.grey}>Стоп</Btn>
    </div>
  );
};
