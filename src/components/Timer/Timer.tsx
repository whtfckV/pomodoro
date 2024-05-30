import { FC } from "react";
import { TaskNumber } from "./TaskNumber";
import { Time } from "./Time";
import { Controls } from "./Controls";
import styles from './Timer.module.css'

export const Timer: FC = () => {
  return (
    <div className={styles.timer}>
      <Time />
      <TaskNumber />
      <Controls />
    </div>
  );
};
