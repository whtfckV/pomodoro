import { FC, useEffect, useState } from "react";
import { EColor, Text } from "src/components/Text";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { EProgress, resetTimer } from "src/store/timerSlice";
import classNames from "classnames";
import { ITodo } from "src/components/Home/Todo/TodoForm";
import styles from "./TaskInformation.module.css";
import { removeTodo } from "src/store/todoSlice";

interface ITaskInformationProps {
  todo: ITodo
}

export const TaskInformation: FC<ITaskInformationProps> = ({ todo }) => {
  const { tomatos, id } = useAppSelector(state => state.todos.todos[0])
  const { progress, currentTomato } = useAppSelector(state => state.timer)
  const dispatch = useAppDispatch()
  const [descr, setDescr] = useState<string>(`Помидор ${currentTomato}`)

  useEffect(() => {
    if (currentTomato > tomatos) {
      dispatch(removeTodo(id))
      dispatch(resetTimer())
    }

    if ([EProgress.work, EProgress.workPause, EProgress.nothing].includes(progress)) {
      setDescr(`Помидор ${currentTomato}`)
    }

    if ([EProgress.break, EProgress.breakPause].includes(progress)) {
      setDescr(`Перерыв ${currentTomato}`)
    }
  }, [progress, currentTomato, tomatos, id, dispatch])

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
        {descr}
      </Text>
    </div>
  );
};
