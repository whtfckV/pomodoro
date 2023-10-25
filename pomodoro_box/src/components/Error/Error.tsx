import { FC, ReactNode } from "react"
import styles from './Error.module.css'

interface IErrorProps {
  children: ReactNode
}

export const Error: FC<IErrorProps> = ({ children }) => {
  return (
    <span className={styles.error}>
      {children}
    </span>
  )
}
