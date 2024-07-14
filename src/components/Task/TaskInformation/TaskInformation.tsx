import { FC, useEffect, useState } from "react";
import { EColor, Text } from "src/components/Text";
import { useAppSelector } from "src/store/hooks";
import { Todo } from "src/store/todoSlice";
import styles from "./TaskInformation.module.css";
import classNames from "classnames";

type TaskInformationProps = {
  todo: Todo
}

export const TaskInformation: FC<TaskInformationProps> = ({ todo }) => {
  // const { tomatos, id } = useAppSelector(state => state.todos.todos[0])
  const { isBreak, isStarted, currentTomato } = useAppSelector(state => state.timer)
  const [descr, setDescr] = useState<string>(`Помидор ${currentTomato}`)
  const [bg, setBg] = useState<string>('')

  useEffect(() => {
    if (!isStarted) {
      setBg('')
      return
    }
    if (isBreak) {
      setBg(styles.break)
      setDescr(`Перерыв ${currentTomato}`)
    } else {
      setDescr(`Помидор ${currentTomato}`)
      setBg(styles.work)
    }
  }, [isBreak, isStarted, currentTomato])

  return (
    <div className={classNames(styles.info, bg)}>
      <Text As='h2' size={16} weight={700} color={EColor.white}>
        {todo.name}
      </Text>
      <Text As='span' size={16} weight={400} color={EColor.white}>
        {descr}
      </Text>
    </div>
  );
};
