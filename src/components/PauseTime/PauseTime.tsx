import { FC } from 'react'
import { useAppSelector } from 'src/store/hooks'
import { Widget } from '../Widget'
import { Text } from '../Text'
import PauseIcon from 'src/assets/icons/pause_time_icon.svg?react';
import styles from './PauseTime.module.css'

interface IPauseTime {
  gridClass: string
}

export const PauseTime: FC<IPauseTime> = ({ gridClass }) => {
  const { pauseTime } = useAppSelector(state => state.statistics)

  return (
    <Widget title='Время на паузе' gridClass={gridClass}>
      <Text size={64} className={styles.text}>{`${pauseTime || 0}%`}</Text>
      <PauseIcon className={styles.iconClass} />
    </Widget>
  )
}
