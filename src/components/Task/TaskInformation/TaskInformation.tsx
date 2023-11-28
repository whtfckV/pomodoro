import { FC } from "react";
import { EColor, Text } from "src/components/Text";
import { useAppSelector } from "src/store/hooks";
import { EProgress } from "src/store/timerSlice";
import classNames from "classnames";
import styles from "./TaskInformation.module.css";

interface ITaskInformationProps { }

export const TaskInformation: FC<ITaskInformationProps> = () => {
  const todo = useAppSelector(state => state.todos.todos[0])
  const { progress, currentTomato } = useAppSelector(state => state.timer)

  const getClasses = () => {
    switch (progress) {
      case EProgress.work:
      case EProgress.workPause:
        return classNames(styles.info, styles.work)
      case EProgress.break:
      case EProgress.breakPause:
        return classNames(styles.info, styles.break)
      default:
        return styles.info
    }
  }

  return (
    <div className={getClasses()}>
      <Text As='h2' size={16} weight={700} color={EColor.white}>
        {todo?.name}
      </Text>
      <Text As='span' size={16} weight={400} color={EColor.white}>
        {`Помидор ${currentTomato}`}
      </Text>
    </div>
  );
};
