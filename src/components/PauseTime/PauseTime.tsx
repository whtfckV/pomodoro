import { FC } from "react"
import { Text } from "../Text"
import { GridComponent } from "../GridComponent/GridComponent"
// import styles from './PauseTime.module.css'

interface IPauseTime {
  gridClass: string
}

export const PauseTime: FC<IPauseTime> = ({ gridClass }) => {
  return (
    <GridComponent gridClass={gridClass}>
      <Text As='h3' size={24} weight={700}>
        Время на паузе
      </Text>
    </GridComponent>
  )
}
