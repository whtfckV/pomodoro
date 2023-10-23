import { FC } from 'react';
import styles from './MainTitle.module.css'

const Title: FC = () => {
  return (
    <h1 className={styles.title}>
      «Помодоро» — это техника управления временем
    </h1>
  );
}

export default Title
