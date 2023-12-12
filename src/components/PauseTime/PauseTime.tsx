import { FC } from "react"
import { Text } from "../Text"
import styles from './PauseTime.module.css'
import { GridComponent } from "../GridComponent/GridComponent"

interface IPauseTime {
  gridClass: string
}

export const PauseTime: FC<IPauseTime> = ({ gridClass }) => {
  return (
    <GridComponent gridClass={styles.pauseTime}>
      <Text As='h3' size={24} weight={700}>
        Время на паузе
      </Text>
    </GridComponent>
  )
}
