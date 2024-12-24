import { FC, useEffect } from "react"
import { MainTitle } from "src/components/MainTitle"
import { Statistics } from "src/components/Statistics"

export const STATISTICS = '/statistics'

export const StatisticsPage: FC = () => {

  useEffect(() => {
    document.title = 'Pomodoro_box — Статистика'
  }, [])

  return (
    <>
      <MainTitle />
      <Statistics />
    </>
  )
}
