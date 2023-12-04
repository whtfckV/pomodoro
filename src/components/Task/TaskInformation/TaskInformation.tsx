import { FC, useEffect, useState } from "react";
import { EColor, Text } from "src/components/Text";
import { useAppSelector } from "src/store/hooks";
import { EProgress } from "src/store/timerSlice";
import classNames from "classnames";
import { ITodo } from "src/components/Todo/TodoForm";
import styles from "./TaskInformation.module.css";

interface ITaskInformationProps {
  todo: ITodo
}

export const TaskInformation: FC<ITaskInformationProps> = ({ todo }) => {
  const { progress, currentTomato } = useAppSelector(state => state.timer)
  const [descr, setDescr] = useState<string>(`Помидор ${currentTomato}`)

  useEffect(() => {
    if ([EProgress.work, EProgress.workPause].includes(progress)) {
      setDescr(`Помидор ${currentTomato}`)
    }

    if ([EProgress.break, EProgress.breakPause].includes(progress)) {
      setDescr(`Перерыв ${currentTomato}`)
    }
  }, [progress, currentTomato])

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
