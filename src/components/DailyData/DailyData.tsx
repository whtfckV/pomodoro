import { FC } from "react"
import { EColor, Text } from "src/components/Text"
import { GridComponent } from "../GridComponent/GridComponent"
import styles from './DailyData.module.css'
import { useAppSelector } from "src/store/hooks"
import classNames from "classnames"

interface IDailyData { }

const week = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]

export const DailyData: FC<IDailyData> = () => {
  const workingTime = useAppSelector(state => state.statistics.workingTime)

  return (
    <GridComponent
      gridClass={classNames('widget', styles.dailyData)}
      title={week[(new Date).getDay()]}
      titleClass={styles.title}
    >
      {!workingTime ?
        <Text size={16} weight={400}>Нет данных</Text> :
        <Text size={16} weight={400}>
          Вы работали над задачами в течение
          {/* В ЗАВИСИМОСТИ ОТ КОЛЛИЧЕСТВА МИНУТ МЕНЯТЬ ОКОНЧАНИЕ Т/ТЫ */}
          <Text size={16} weight={700} color={EColor.red}> {workingTime} минуты</Text>
        </Text>}
    </GridComponent>
  )
}
