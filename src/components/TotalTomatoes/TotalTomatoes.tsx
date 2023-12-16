import { FC } from "react"
import { GridComponent } from "../GridComponent/GridComponent"
import Tomato from 'src/assets/icons/tomato.svg?react'
import classNames from "classnames"
import styles from './TotalTomatoes.module.css'

interface ITotalTomatoes {
  gridClass: string
}

export const TotalTomatoes: FC<ITotalTomatoes> = ({ gridClass }) => {
  return (
    <GridComponent gridClass={classNames(gridClass, styles.tomato)}>
      <Tomato />
    </GridComponent>
  )
}
