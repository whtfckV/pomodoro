import { FC } from 'react';
import styles from './MainTitle.module.css'

export const MainTitle: FC = () => {
  return (
    <h1 className={styles.title}>
      «Помодоро» — это техника управления временем
    </h1>
  );
}
