import { FC } from "react";
import { TaskNumber } from "../TaskNumber";
import { Timer } from "../Timer";
import { Controls } from "../Timer/Controls";
import styles from './TimeControl.module.css'
import { useAppSelector } from "src/store/hooks";

interface ITimeControlProps { }

export const TimeControl: FC<ITimeControlProps> = () => {
  const timer = useAppSelector(state => state.timer)

  return (
    <div className={styles.timeControl}>
      <Timer ms={timer.time} />
      <TaskNumber />
      <Controls />
    </div>
  );
};
