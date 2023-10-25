import { FC, ReactNode } from "react"
import { TaskInformation } from "./TaskInformation"
import styles from './Task.module.css'

interface ITaskProps {
  children: ReactNode
}

export const Task: FC<ITaskProps> = ({ children }) => {
  return (
    <div className={styles.task}>
      <TaskInformation />
      {children}
    </div>
  )
}
