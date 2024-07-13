import { FC } from "react";
import { Text, EColor } from "../../Text";
import styles from './TaskNumber.module.css'
import { useAppSelector } from "src/store/hooks";

export const TaskNumber: FC = () => {
  const todo = useAppSelector(state => state.todos.todos[0])

  return (
    <span className={styles.taskNumber}>
      <Text size={16} weight={400} color={EColor.grey}>Задача 1 - </Text>
      <Text size={16} weight={400} color={EColor.black}>{todo?.name}</Text>
    </span>
  );
};
