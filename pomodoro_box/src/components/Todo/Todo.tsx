import { FC } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import styles from './Todo.module.css';

export const Todo: FC = () => {

  return (
    <div className={styles.todo}>
      <TodoForm />
      <TodoList/>
      {/* <TotalTime/> */}
    </div>
  );
}
