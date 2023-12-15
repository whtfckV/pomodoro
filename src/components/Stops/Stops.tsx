import { FC } from "react"
import { Text } from "../Text"
import { GridComponent } from "../GridComponent/GridComponent"
// import styles from './Stops.module.css'

interface IStops {
  gridClass: string
}

export const Stops: FC<IStops> = ({ gridClass }) => {
  return (
    <GridComponent gridClass={gridClass}>
      <Text As='h3' size={24} weight={700}>
        Остановки
      </Text>
    </GridComponent>
  )
}
