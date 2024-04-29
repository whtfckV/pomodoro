import { FC } from "react"
import { GridComponent } from "../GridComponent/GridComponent"
import styles from './BarChart.module.css'
import classNames from "classnames"

interface IBarChart { }

export const BarChart: FC<IBarChart> = () => {
  return (
    <GridComponent gridClass={classNames('widget', styles.bar)}>
      BAAR
    </GridComponent>
  )
}
