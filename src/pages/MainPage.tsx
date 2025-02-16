import { FC, useEffect } from 'react'
import { Header } from 'src/components/Header'
import { Outlet } from 'react-router-dom'

export const MAIN = '/'

export const Main: FC = () => {

  useEffect(() => {
    document.title = 'Pomodoro_box — Главная'
  }, [])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
