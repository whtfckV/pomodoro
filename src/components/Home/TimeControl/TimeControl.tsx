import { FC } from "react";
import { TaskNumber } from "../TaskNumber";
import { Timer } from "../Timer";
import { Controls } from "../Timer/Controls";
import styles from './TimeControl.module.css'

interface ITimeControlProps { }

export const TimeControl: FC<ITimeControlProps> = () => {
  return (
    <div className={styles.timeControl}>
      <Timer />
      <TaskNumber />
      <Controls />
    </div>
  );
};
