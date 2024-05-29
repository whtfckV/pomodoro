import { FC, ReactNode } from 'react';
import { Container } from '../Container';
import styles from './Content.module.css';

export type ContentProps = {
  children: ReactNode
  gridClass: string
}

export const Content: FC<ContentProps> = ({ children, gridClass }) => {
  return (
    <main className={styles.content}>
      <Container className={gridClass}>
        {children}
      </Container>
    </main>
  );
}
