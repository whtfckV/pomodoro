import { FC } from "react"
import { EColor, Text } from "src/components/Text"
import { GridComponent } from "../GridComponent/GridComponent"
import styles from './DailyData.module.css'
import { useAppSelector } from "src/store/hooks"

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
  const workingTime = useAppSelector(state => state.statistics.workingTime)

  return (
    <GridComponent gridClass={gridClass}>
      <Text As='h3' size={24} weight={700} className={styles.title}>
        {week[(new Date).getDay()]}
      </Text>
      {!workingTime ?
        <Text size={16} weight={400}>Нет данных</Text> :
        <Text size={16} weight={400}>
          Вы работали над задачами в течение
          <Text size={16} weight={700} color={EColor.red}> {workingTime} минуты</Text>
        </Text>}
    </GridComponent>
  )
}
