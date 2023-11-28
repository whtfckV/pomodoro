import { FC } from 'react';
import { Container } from '../Container';
import styles from './Content.module.css';

export interface IContentProps {
  children: React.ReactNode
}

export const Content: FC<IContentProps> = ({ children }) => {
  return (
    <main className={styles.content}>
      <Container className={styles.container}>
        {children}
      </Container>
    </main>
  );
}
