import { FC } from "react"
import { Text } from "src/components/Text"
import { GridComponent } from "../GridComponent/GridComponent"
// import styles from './DailyData.module.css'

interface IDailyData {
  gridClass: string
}

const week = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]

export const DailyData: FC<IDailyData> = ({ gridClass }) => {
  return (
    <GridComponent gridClass={gridClass}>
      <Text As='h3' size={24} weight={700}>
        {week[(new Date).getDay()]}
      </Text>
    </GridComponent>
  )
}
