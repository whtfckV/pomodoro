import { FC } from "react";
import { Text, EColor } from "../Text";
import styles from './TaskNumber.module.css'
import { useAppSelector } from "src/store/hooks";

interface ITaskNumberProps {
}

export const TaskNumber: FC<ITaskNumberProps> = () => {
  const name = useAppSelector(state => state.todos.todos[0].name)

  return (
    <span className={styles.taskNumber}>
      <Text size={16} weight={400} color={EColor.grey}>Задача 1 - </Text>
      <Text size={16} weight={400} color={EColor.black}>{name}</Text>
    </span>
  );
};
