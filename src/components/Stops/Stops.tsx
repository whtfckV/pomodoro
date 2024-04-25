import { FC } from 'react'
import { useAppSelector } from 'src/store/hooks';
import { Widget } from '../Widget';
import { Text } from '../Text';
import StopsIcon from '../../assets/icons/stops_icon.svg?react';
import styles from './Stops.module.css'

interface IStops {
  gridClass: string;
}

export const Stops: FC<IStops> = ({ gridClass }) => {
  const { stops } = useAppSelector(state => state.statistics)

  return (
    <Widget title='Останвоки' gridClass={gridClass}>
      <Text size={64} className={styles.text}>{`${stops || 0}%`}</Text>
      <StopsIcon className={styles.iconClass} />
    </Widget>
  )
}
