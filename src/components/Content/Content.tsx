import { FC, ReactNode } from 'react';
import { Container } from '../Container';
import styles from './Content.module.css';

export interface IContentProps {
  children: ReactNode
  gridClass: string
}

export const Content: FC<IContentProps> = ({ children, gridClass }) => {
  return (
    <main className={styles.content}>
      <Container className={gridClass}>
        {children}
      </Container>
    </main>
  );
}
