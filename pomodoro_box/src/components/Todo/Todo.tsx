import { FC, useState } from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import styles from './Todo.module.css'

const Todo: FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const AddTodo = (newTodo: string) => {
    setTodos([
      newTodo,
      ...todos,
    ])
  }

  return (
    <div className={styles.todo}>
      <TodoForm setNewTodo={AddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todo
