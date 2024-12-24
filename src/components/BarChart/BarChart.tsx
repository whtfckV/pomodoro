import { FC } from "react"
import { GridComponent } from "../GridComponent/GridComponent"
import styles from './BarChart.module.css'
import classNames from "classnames"

export const BarChart: FC = () => {
  return (
    <GridComponent gridClass={classNames('widget', styles.bar)}>
      BAAR
    </GridComponent>
  )
}
