import { FC, useEffect, useState } from 'react'
import { Content } from '../Content'
import { PickWeek, TWeek, WeekOption } from '../PickWeek'
import { DailyData } from '../DailyData'
import { TotalTomatoes } from '../TotalTomatoes'
import { GridComponent } from '../GridComponent/GridComponent'
import { Data, Days, Graph } from '../BarChart'
import styles from './Statistics.module.css'
import { Focus } from '../Focus'
import { PauseTime } from '../PauseTime'
import { Stops } from '../Stops'
import { SingleValue } from 'react-select'
import { useAppSelector } from 'src/store/hooks'
import moment from 'moment'
import { StatisticData } from 'src/store/statisticsSlice'

moment.locale('ru', {
  weekdaysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
});

const getWeekfromStorage = (): TWeek | null => localStorage.getItem('week') as TWeek;

export const Statistics: FC = () => {
  const dates = useAppSelector(state => state.statistics.dates)
  const [selectedOption, setSelectedOption] = useState<TWeek | null>(getWeekfromStorage());
  const [activeDay, setActiveDay] = useState<Days | null>('Пн');
  const [selectedDayStatistice, setSelectedDayStatistic] = useState<StatisticData>()
  const [focus, setFocus] = useState<number>(0)
  const [data, setData] = useState<StatisticData[]>([])
  const [graph, setGraph] = useState<Data[]>([
    { day: "Пн", time: 0 },
    { day: "Вт", time: 0 },
    { day: "Ср", time: 0 },
    { day: "Чт", time: 0 },
    { day: "Пт", time: 0 },
    { day: "Сб", time: 0 },
    { day: "Вс", time: 0 },
  ])

  useEffect(() => {
    setData(data => [...data])
    let start = moment().startOf('week');
    let end = moment().endOf('week');
    switch (selectedOption) {
      case 'lastWeek':
        start = moment().subtract(1, 'week').startOf('week');
        end = moment().subtract(1, 'week').endOf('week');
        break;
      case 'twoWeeksAgo':
        start = moment().subtract(2, 'week').startOf('week');
        end = moment().subtract(2, 'week').endOf('week');
        break;
      default:
        start = moment().startOf('week');
        end = moment().endOf('week');
        break;
    }
    setData(dates.filter((date: StatisticData) =>
      moment(date.date).isBetween(start, end, 'day', '[]')
    ))
  }, [dates, selectedOption])

  useEffect(() => {
    const newGraph = graph.map<Data>(item => {
      const existingDate = data.find(date => moment(date.date).format('dd') === item.day)
      if (existingDate) {
        return {
          ...item,
          time: existingDate.workTime
        }
      }
      return {
        ...item,
        time: 0
      }
    })
    setGraph(newGraph)
  }, [data, graph])

  useEffect(() => {
    if (selectedOption) {
      localStorage.setItem('week', selectedOption)
    }
  }, [selectedOption])

  useEffect(() => {
    const existringDate = data.find(day => moment(day.date).format('dd') === activeDay)
    setSelectedDayStatistic(existringDate)
    if (existringDate) {
      const newFocus = Math.round((existringDate.workTime / existringDate.allTime) * 100)
      setFocus(newFocus)
    } else {
      setFocus(0)
    }
  }, [activeDay, data, selectedOption])

  const handleChangeDay = (day: Days) => {
    setActiveDay(day)
  };
  const handleChangeWeek = (option: SingleValue<WeekOption>) => {
    if (!option?.value) return
    setSelectedOption(option?.value);
  }

  return (
    <Content gridClass={styles.container}>
      <GridComponent title='Ваша активность' gridClass={styles.title} />
      <PickWeek onChange={handleChangeWeek} value={selectedOption} />
      <DailyData date={selectedDayStatistice?.date} data={selectedDayStatistice?.workTime} />
      <TotalTomatoes data={selectedDayStatistice?.totalTomatoes} />
      <Graph data={graph} activeDay={activeDay} handleChangeDay={handleChangeDay} />
      <Focus data={focus} />
      <PauseTime data={selectedDayStatistice?.pauseTime} />
      <Stops data={selectedDayStatistice?.stops} />
    </Content>
  )
}
