import { FC } from "react";
import { Text, EColor } from "../Text";
import styles from './TaskNumber.module.css'

interface ITaskNumberProps {
}

export const TaskNumber: FC<ITaskNumberProps> = () => {
  return (
    <span className={styles.taskNumber}>
      <Text size={16} weight={400} color={EColor.grey}>Задача 1 - </Text>
      <Text size={16} weight={400} color={EColor.black}>Сверстать сайт</Text>
    </span>
  );
};
