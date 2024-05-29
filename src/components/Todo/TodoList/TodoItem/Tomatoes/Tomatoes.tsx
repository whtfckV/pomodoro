import { FC } from 'react';
import styles from './Tomatoes.module.css'

export type TomatoesProps = {
  tomatoCount: number;
}

export const Tomatoes: FC<TomatoesProps> = ({ tomatoCount }) => {
  return (
    <span className={styles.tomato}>
      {tomatoCount}
    </span>
  );
}
