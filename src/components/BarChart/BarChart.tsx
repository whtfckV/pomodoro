import { FC } from "react"
import { GridComponent } from "../GridComponent/GridComponent"

interface IBarChart {
  gridClass: string
}

export const BarChart: FC<IBarChart> = ({gridClass}) => {
  return (
    <GridComponent gridClass={gridClass}>
      BAAR
    </GridComponent>
  )
}
