import { FC, ReactNode } from "react"
import { TaskInformation } from "./TaskInformation"
import styles from './Task.module.css'
import { useAppSelector } from "src/store/hooks"

interface ITaskProps {
  children: ReactNode
}

export const Task: FC<ITaskProps> = ({ children }) => {
  const todos = useAppSelector(state => state.todos.todos)

  const content = todos.length ? <>
    <TaskInformation />
    {children}
  </> : 'Заданий нету'

  return (
    <div className={styles.task}>
      {content}
    </div>
  )
}
