import { FC } from 'react'
import { Content } from '../Content'
import { PickWeek } from '../PickWeek'
import { DailyData } from '../DailyData'
import { TotalTomatoes } from '../TotalTomatoes'
import { GridComponent } from '../GridComponent/GridComponent'
import { BarChart } from '../BarChart'
import styles from './Statistics.module.css'
import { Focus } from '../Focus'
import { PauseTime } from '../PauseTime'
import { Stops } from '../Stops'

interface IStatisticsProps { }


export const Statistics: FC<IStatisticsProps> = () => {

  return (
    <Content gridClass={styles.container}>
      <GridComponent title='Ваша активность' gridClass={styles.title} />
      <PickWeek />
      <DailyData />
      <TotalTomatoes />
      <BarChart />
      <Focus />
      <PauseTime />
      <Stops />
    </Content>
  )
}
