import { FC } from "react"
import { GridComponent } from "../GridComponent/GridComponent"
import TomatoSmile from 'src/assets/icons/tomato_smile.svg?react'
import Tomato from 'src/assets/icons/tomato.svg?react'
import classNames from "classnames"
import { EColor, Text } from "../Text"
import styles from './TotalTomatoes.module.css'

type Props = {
  data: number | undefined
}

export const TotalTomatoes: FC<Props> = ({ data }) => {
  return (
    <GridComponent
      gridClass={classNames('widget', styles.tomato, data && styles.notEmpty)}
    >
      {!data ?
        <TomatoSmile /> :
        <>
          <Tomato />
          <Text size={24} weight={700} color={EColor.grey}>X {data}</Text>
          <div className={styles.descr}>
            <Text size={24} weight={700} color={EColor.white}>
              {data} помидора
            </Text>
          </div>
        </>
      }
    </GridComponent>
  )
}
