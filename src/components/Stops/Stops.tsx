import { FC } from 'react'
import { Widget } from '../Widget';
import { Text } from '../Text';
import StopsIcon from '../../assets/icons/stops_icon.svg?react';
import styles from './Stops.module.css'
import classNames from 'classnames';

type Props = {
  data: number | undefined;
}

export const Stops: FC<Props> = ({ data }) => {
  return (
    <Widget title='Остановки' gridClass={classNames('widget', data ? styles.bgActive : '', styles.stops)}>
      <Text size={64} className={styles.text}>{`${data || 0}`}</Text>
      <StopsIcon className={classNames(data ? styles.iconActive : '', styles.iconClass)} />
    </Widget>
  )
}
