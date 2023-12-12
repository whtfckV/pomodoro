import { FC } from "react"
import { GridComponent } from "../GridComponent/GridComponent"
// import styles from './TotalTomatoes.module.css'

interface ITotalTomatoes {
  gridClass: string
}

export const TotalTomatoes: FC<ITotalTomatoes> = ({ gridClass }) => {
  return (
    <GridComponent gridClass={gridClass}>TotalTomatoes</GridComponent>
  )
}
