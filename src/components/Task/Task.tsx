import { FC, ReactNode } from "react"
import { TaskInformation } from "./TaskInformation"
import { useAppSelector } from "src/store/hooks"
import styles from './Task.module.css'

interface ITaskProps {
  children: ReactNode
}

export const Task: FC<ITaskProps> = ({ children }) => {
  const todos = useAppSelector(state => state.todos.todos)

  const content = todos.length ? <>
    <TaskInformation todo={todos[0]} />
    {children}
  </> : 'Заданий нету'

  return (
    <div className={styles.task}>
      {content}
    </div>
  )
}
