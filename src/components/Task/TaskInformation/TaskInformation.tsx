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
  const { isWorking, isStarted, currentTomato } = useAppSelector(state => state.timer)
  const [descr] = useState<string>(`Помидор ${currentTomato}`)
  const [bg, setBg] = useState<string>('')

  useEffect(() => {
    if (!isStarted) {
      setBg('')
      return
    }
    // Поменять на будущее isBreak
    if (isWorking) {
      setBg(styles.work)
    } else {
      setBg(styles.break)
    }
  }, [isWorking, isStarted])

  useEffect(() => {
    console.log(currentTomato)
  }, [currentTomato])

  // useEffect(() => {
  //   if (currentTomato > tomatos) {
  //     dispatch(removeTodo(id))
  //     dispatch(resetTimer())
  //   }

  //   if ([EStatus.work, EStatus.workPause, EStatus.nothing].includes(status)) {
  //     setDescr(`Помидор ${currentTomato}`)
  //   }

  //   if ([EStatus.break, EStatus.breakPause].includes(status)) {
  //     setDescr(`Перерыв ${currentTomato - 1}`)
  //   }
  // }, [status, currentTomato, tomatos, id, dispatch])

  // const getClasses = () => {
  //   switch (status) {
  //     case EStatus.work:
  //     case EStatus.workPause:
  //       return classNames(styles.info, styles.work)
  //     case EStatus.break:
  //     case EStatus.breakPause:
  //       return classNames(styles.info, styles.break)
  //     default:
  //       return styles.info
  //   }
  // }

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
