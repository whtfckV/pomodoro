import { FC } from "react";
import { Btn, EType } from "src/components/Btn";
import styles from './Controls.module.css'

interface IControlsProps {
}

export const Controls: FC<IControlsProps> = () => {
  return (
    <div className={styles.controls}>
      <Btn>Старт</Btn>
      <Btn styleType={EType.grey}>Стоп</Btn>
    </div>
  );
};
