import { FC } from "react";
import { EColor, Text } from "src/components/Text";
import { useAppSelector } from "src/store/hooks";
import classNames from "classnames";
import { EState } from "src/store/timerSlice";
import styles from "./TaskInformation.module.css";

interface ITaskInformationProps { }

export const TaskInformation: FC<ITaskInformationProps> = () => {
  const todo = useAppSelector(state => state.todos.todos[0])
  const timerState = useAppSelector(state => state.timer.timerState)
  const tomato = useAppSelector(state => state.timer.currentTomato)

  const getClasses = () => {
    switch (timerState) {
      case EState.work:
        return classNames(styles.info, styles.work)
      case EState.break:
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
        {`Помидор ${tomato}`}
      </Text>
    </div>
  );
};
