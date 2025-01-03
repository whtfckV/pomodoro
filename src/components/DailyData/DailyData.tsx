import { FC } from "react"
import { EColor, Text } from "src/components/Text"
import { GridComponent } from "../GridComponent/GridComponent"
import styles from './DailyData.module.css'
// import { useAppSelector } from "src/store/hooks"
import classNames from "classnames"
import { ESize, timeConvert } from "src/utils/ts/timeConvert"

const week = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]

type Props = {
  date: string | undefined,
  data: number | undefined,
}

export const  DailyData: FC<Props> = ({date = '', data}) => {
  // const workingTime = useAppSelector(state => state.statistics.workTime)

  return (
    <GridComponent
      gridClass={classNames('widget', styles.dailyData)}
      title={week[(new Date(date)).getDay()]}
      titleClass={styles.title}
    >
      {!data ?
        <Text size={16} weight={400}>Нет данных</Text> :
        <Text size={16} weight={400}>
          Вы работали над задачами в течение
          <Text size={16} weight={700} color={EColor.red}>{timeConvert(data, ESize.long)}</Text>
        </Text>}
    </GridComponent>
  )
}
