import { FC } from "react";
import styles from "./TaskInformation.module.css";
import { EColor, Text } from "src/components/Text";
import { useAppSelector } from "src/store/hooks";

interface ITaskInformationProps {
}

export const TaskInformation: FC<ITaskInformationProps> = () => {
  const todo = useAppSelector(state => state.todos.todos[0])

  const displayTomatos = () => {
    const tomatos = todo?.tomatos

    if (!tomatos) return ''

    if (tomatos > 4) {
      return `Помидоров ${tomatos}`
    } else if (tomatos > 1) {
      return `Помидора ${tomatos}`
    } else {
      return `Помидор ${tomatos}`
    }
  }

  return (
    <div className={styles.info}>
      <Text As='h2' size={16} weight={700} color={EColor.white}>
        {todo?.name}
      </Text>
      <Text As='span' size={16} weight={400} color={EColor.white}>
        {displayTomatos()}
      </Text>
    </div>
  );
};
