import { FC } from 'react'
import { Content } from '../Content'
import { PickWeek } from '../PickWeek'
import { DailyData } from '../DailyData'
import { TotalTomatoes } from '../TotalTomatoes'
import { GridComponent } from '../GridComponent/GridComponent'
import classNames from 'classnames'
import { BarChart } from '../BarChart'
import styles from './Statistics.module.css'
import { Focus } from '../Focus'
import { PauseTime } from '../PauseTime'
import { Stops } from '../Stops'

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
      <Focus gridClass={addWidgetClass(styles.focus)} />
      <PauseTime gridClass={addWidgetClass(styles.pause)} />
      <Stops gridClass={addWidgetClass(styles.stops)} />
    </Content>
  )
}
