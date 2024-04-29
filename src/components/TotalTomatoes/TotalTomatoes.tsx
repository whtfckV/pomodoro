import { FC } from "react"
import { GridComponent } from "../GridComponent/GridComponent"
import TomatoSmile from 'src/assets/icons/tomato_smile.svg?react'
import Tomato from 'src/assets/icons/tomato.svg?react'
import classNames from "classnames"
import { useAppSelector } from "src/store/hooks"
import { EColor, Text } from "../Text"
import styles from './TotalTomatoes.module.css'

interface ITotalTomatoes { }

export const TotalTomatoes: FC<ITotalTomatoes> = () => {
  const totalTomatoes = useAppSelector(state => state.statistics.totalTomatoes)

  return (
    <GridComponent
      gridClass={classNames('widget', styles.tomato, totalTomatoes && styles.notEmpty)}
    >
      {!totalTomatoes ?
        <TomatoSmile /> :
        <>
          <Tomato />
          <Text size={24} weight={700} color={EColor.grey}>X {totalTomatoes}</Text>
          <div className={styles.descr}>
            <Text size={24} weight={700} color={EColor.white}>
              {totalTomatoes} помидора
            </Text>
          </div>
        </>
      }
    </GridComponent>
  )
}
