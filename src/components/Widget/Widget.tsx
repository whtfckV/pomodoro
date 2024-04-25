import { FC, ReactNode } from "react"
import { GridComponent } from "../GridComponent/GridComponent"
import styles from './Widget.module.css'
import classNames from "classnames"

interface IWidget {
  title: string
  gridClass: string
  children: ReactNode
}

export const Widget: FC<IWidget> = ({ gridClass, title, children }) => {
  return (
    <GridComponent gridClass={classNames(gridClass, styles.gridWidget)} title={title} titleClass={styles.title}>
      {children}
    </GridComponent>
  )
}
