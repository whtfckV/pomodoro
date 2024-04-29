import { FC } from 'react'
import { useAppSelector } from 'src/store/hooks'
import { Widget } from '../Widget'
import { Text } from '../Text'
import PauseIcon from 'src/assets/icons/pause_time_icon.svg?react';
import styles from './PauseTime.module.css'
import classNames from 'classnames';

interface IPauseTime {}

export const PauseTime: FC<IPauseTime> = () => {
  const { pauseTime } = useAppSelector(state => state.statistics)

  return (
    <Widget title='Время на паузе' gridClass={classNames('widget', pauseTime ? styles.bgActive : '', styles.pause)}>
      <Text size={64} className={styles.text}>{`${pauseTime || 0}м`}</Text>
      <PauseIcon className={classNames(pauseTime ? styles.iconActive : '', styles.iconClass)} />
    </Widget>
  )
}
