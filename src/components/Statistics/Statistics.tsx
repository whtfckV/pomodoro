import { FC } from 'react'
import { Content } from '../Content'
import { PickWeek } from '../PickWeek'
import { DailyData } from '../DailyData'
import { TotalTomatoes } from '../TotalTomatoes'
import { Widget } from '../Widget'
import { GridComponent } from '../GridComponent/GridComponent'
import classNames from 'classnames'
import { BarChart } from '../BarChart'
import { useAppSelector } from "src/store/hooks"
import FocusIcon from 'src/assets/icons/focus_icon.svg?react'
import styles from './Statistics.module.css'
import { Focus } from '../Focus'

interface IStatisticsProps { }


export const Statistics: FC<IStatisticsProps> = () => {
  const { focus, pauseTime, stops } = useAppSelector(state => state.statistics)


  const addWidgetClass = (exClass: string) => classNames(exClass, styles.widget)

  return (
    <Content gridClass={styles.container}>
      <GridComponent title='Ваша активность' gridClass={styles.title} />
      <PickWeek gridClass={styles.week} />
      <DailyData gridClass={addWidgetClass(styles.dailyData)} />
      <TotalTomatoes gridClass={addWidgetClass(styles.tomatos)} />
      <BarChart gridClass={addWidgetClass(styles.bar)} />
      <Focus gridClass={addWidgetClass(styles.focus)}/>
      <Widget data={pauseTime} title='Время на паузе' unit='м' gridClass={addWidgetClass(styles.pause)} />
      <Widget data={stops} title='Остановки' gridClass={addWidgetClass(styles.stops)} />
    </Content>
  )
}
