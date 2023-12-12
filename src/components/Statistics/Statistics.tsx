import { FC } from 'react'
import { Content } from '../Content'
import { PickWeek } from '../PickWeek'
import { DailyData } from '../DailyData'
import { TotalTomatoes } from '../TotalTomatoes'
import { Focus } from '../Focus'
import { PauseTime } from '../PauseTime'
import { Stops } from '../Stops'
import { GridComponent } from '../GridComponent/GridComponent'
import styles from './Statistics.module.css'
import classNames from 'classnames'

interface IStatisticsProps { }


export const Statistics: FC<IStatisticsProps> = () => {

  const addWidgetClass = (exClass: string) => classNames(exClass, styles.widget)

  return (
    <Content gridClass={styles.container}>
      <GridComponent title='Ваша активность' gridClass={styles.title} />
      <PickWeek gridClass={styles.week} />
      <DailyData gridClass={addWidgetClass(styles.dailyData)} />
      <TotalTomatoes gridClass={addWidgetClass(styles.tomatos)} />
      <Focus gridClass={addWidgetClass(styles.focus)} />
      <PauseTime gridClass={addWidgetClass(styles.focus)} />
      <Stops gridClass={addWidgetClass(styles.stops)} />
    </Content>
  )
}
