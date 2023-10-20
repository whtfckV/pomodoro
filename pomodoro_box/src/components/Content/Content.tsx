import Container from '../Container/Container';
import { content } from './Content.module.css';

export interface IContentProps {
  children: React.ReactNode
}

export default function Content({ children }: IContentProps) {
  return (
    <main className={content}>
      <Container>
        {children}
      </Container>
    </main>
  );
}
