import { FC, useEffect } from 'react'
import { MainTitle } from 'src/components/MainTitle'
import { Header } from 'src/components/Header'
import { Home } from 'src/components/Home'

export const MAIN = '/'

export const Main: FC = () => {

  useEffect(() => {
    document.title = 'Pomodoro_box — Главная'
  }, [])

  return (
    <>
      <Header />
      <MainTitle />
      <Home />
    </>
  )
}
