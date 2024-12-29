import { FC, useEffect, useState } from 'react'
import { Content } from '../Content'
import { PickWeek, TWeek, WeekOption } from '../PickWeek'
import { DailyData } from '../DailyData'
import { TotalTomatoes } from '../TotalTomatoes'
import { GridComponent } from '../GridComponent/GridComponent'
import { Graph } from '../BarChart'
import styles from './Statistics.module.css'
import { Focus } from '../Focus'
import { PauseTime } from '../PauseTime'
import { Stops } from '../Stops'
import { SingleValue } from 'react-select'
export const Statistics: FC = () => {
  const [selectedOption, setSelectedOption] = useState<TWeek | null>('thisWeek');

  useEffect(() => {
    if (selectedOption) {
      localStorage.setItem('week', selectedOption)
    }
  }, [selectedOption])

  const handleChange = (option: SingleValue<WeekOption>) => {
    if (!option?.value) return
    setSelectedOption(option?.value);
  }

  // ГРАФИК Я СДЕЛАЛ ОСТАЛОСЬ ТОЛЬКО ДАННЫЕ ХАПАТЬ И ПИХАТЬ

  return (
    <Content gridClass={styles.container}>
      <GridComponent title='Ваша активность' gridClass={styles.title} />
      <PickWeek onChange={handleChange} value={selectedOption} />
      <DailyData />
      <TotalTomatoes />
      <Graph />
      <Focus />
      <PauseTime />
      <Stops />
    </Content>
  )
}
