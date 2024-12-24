import { FC } from 'react'
import { useAppSelector } from 'src/store/hooks';
import { Widget } from '../Widget';
import { Text } from '../Text';
import StopsIcon from '../../assets/icons/stops_icon.svg?react';
import styles from './Stops.module.css'
import classNames from 'classnames';

export const Stops: FC = () => {
  const { stops } = useAppSelector(state => state.statistics)

  return (
    <Widget title='Остановки' gridClass={classNames('widget', stops ? styles.bgActive : '', styles.stops)}>
      <Text size={64} className={styles.text}>{`${stops || 0}`}</Text>
      <StopsIcon className={classNames(stops ? styles.iconActive : '', styles.iconClass)} />
    </Widget>
  )
}
