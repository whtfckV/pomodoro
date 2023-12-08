import { FC } from 'react';
import styles from './Tomatoes.module.css'

export interface ITomatoesProps {
  tomatoCount: number;
}

export const Tomatoes: FC<ITomatoesProps> = ({ tomatoCount }) => {
  return (
    <span className={styles.tomato}>
      {tomatoCount}
    </span>
  );
}
