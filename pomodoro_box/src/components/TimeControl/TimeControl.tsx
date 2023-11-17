import { FC } from "react";
import { TaskNumber } from "../TaskNumber";
import { Timer } from "../Timer";
import { Controls } from "../Timer/Controls";
import styles from './TimeControl.module.css'
import { useAppSelector } from "src/store/hooks";

interface ITimeControlProps { }

export const TimeControl: FC<ITimeControlProps> = () => {
  const time = useAppSelector(state => state.timer.time)

  return (
    <div className={styles.timeControl}>
      <Timer ms={time} />
      <TaskNumber />
      <Controls />
    </div>
  );
};
