import { FC } from 'react'
import { Widget } from '../Widget'
import { Text } from '../Text'
import PauseIcon from 'src/assets/icons/pause_time_icon.svg?react';
import styles from './PauseTime.module.css'
import classNames from 'classnames';
import { ESize, timeConvert } from 'src/utils/ts/timeConvert';

type Props = {
  data: number | undefined,
}

export const PauseTime: FC<Props> = ({ data }) => {
  return (
    <Widget title='Время на паузе' gridClass={classNames('widget', data ? styles.bgActive : '', styles.pause)}>
      <Text size={64} className={styles.text}>{data ? timeConvert(data, ESize.short) : '0м'}</Text>
      <PauseIcon className={classNames(data ? styles.iconActive : '', styles.iconClass)} />
    </Widget>
  )
}
