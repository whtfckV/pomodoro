import { FC } from "react";
import { EColor, Text } from "src/components/Text";
import { useAppSelector } from "src/store/hooks";
import styles from "./TaskInformation.module.css";

interface ITaskInformationProps { }

export const TaskInformation: FC<ITaskInformationProps> = () => {
  const todo = useAppSelector(state => state.todos.todos[0])
  const tomato = useAppSelector(state => state.timer.currentTomato)

  return (
    <div className={styles.info}>
      <Text As='h2' size={16} weight={700} color={EColor.white}>
        {todo?.name}
      </Text>
      <Text As='span' size={16} weight={400} color={EColor.white}>
        {`Помидор ${tomato}`}
      </Text>
    </div>
  );
};
