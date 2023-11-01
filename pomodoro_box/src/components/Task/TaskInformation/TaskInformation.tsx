import { FC } from "react";
import styles from "./TaskInformation.module.css";
import { EColor, Text } from "src/components/Text";
import { useAppSelector } from "src/store/hooks";

interface ITaskInformationProps {
}

export const TaskInformation: FC<ITaskInformationProps> = () => {
  const todo = useAppSelector(state => state.todos.todos[0])

  return (
    <div className={styles.info}>
      <Text As='h2' size={16} weight={700} color={EColor.white}>
        {todo?.name}
      </Text>
      <Text As='span' size={16} weight={400} color={EColor.white}>
        {todo?.tomatos}
      </Text>
    </div>
  );
};
