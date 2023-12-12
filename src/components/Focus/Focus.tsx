import { FC } from "react"
import { Text } from "../Text"
import { GridComponent } from "../GridComponent/GridComponent"
// import styles from './Focus.module.css'

interface IFocus {
  gridClass: string
}

export const Focus: FC<IFocus> = ({ gridClass }) => {
  return (
    <GridComponent gridClass={gridClass}>
      <Text As='h3' size={24} weight={700}>
        Фокус
      </Text>
    </GridComponent>
  )
}
