import { FC, ReactNode } from "react"
import { TaskInformation } from "./TaskInformation"
import { useAppSelector } from "src/store/hooks"
import { NoTasks } from "./NoTasks"
import styles from './Task.module.css'

interface ITaskProps {
  children: ReactNode
}

export const Task: FC<ITaskProps> = ({ children }) => {
  const todos = useAppSelector(state => state.todos.todos)

  const content = todos.length ? <>
    <TaskInformation todo={todos[0]} />
    {children}
  </> : <NoTasks />

  return (
    <div className={todos.length ? styles.task : styles.notask}>
      {content}
    </div>
  )
}
