import { FC, useEffect } from 'react'
import { MainTitle } from 'src/components/MainTitle'
import { Home } from 'src/components/Home'

export const MAIN = '/'

export const TimerPage: FC = () => {
  useEffect(() => {
    document.title = 'Pomodoro_box — Главная'
  }, [])

  return (
    <>
      <MainTitle />
      <Home />
    </>
  )
}
