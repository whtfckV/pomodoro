import { FC } from 'react'
import { Content } from '../Content'
import { PickWeek } from '../PickWeek'
import { DailyData } from '../DailyData'
import { TotalTomatoes } from '../TotalTomatoes'
import { Widget } from '../Widget'
import { GridComponent } from '../GridComponent/GridComponent'
import classNames from 'classnames'
import { BarChart } from '../BarChart'
import styles from './Statistics.module.css'

interface IStatisticsProps { }


export const Statistics: FC<IStatisticsProps> = () => {

  const addWidgetClass = (exClass: string) => classNames(exClass, styles.widget)

  return (
    <Content gridClass={styles.container}>
      <GridComponent title='Ваша активность' gridClass={styles.title} />
      <PickWeek gridClass={styles.week} />
      <DailyData gridClass={addWidgetClass(styles.dailyData)} />
      <TotalTomatoes gridClass={addWidgetClass(styles.tomatos)} />
      <BarChart gridClass={addWidgetClass(styles.bar)} />
      <Widget gridClass={addWidgetClass(styles.focus)} title='Фокус' unit='%' />
      <Widget gridClass={addWidgetClass(styles.pause)} title='Время на паузе' unit='м' />
      <Widget gridClass={addWidgetClass(styles.stops)} title='Остановки' />
    </Content>
  )
}
