import { FC, useState } from 'react';
import { ITodo, TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import styles from './Todo.module.css';
import { TotalTime } from './TotalTime';

export const Todo: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const AddTodo = (newTodo: ITodo) => {
    setTodos([
      ...todos,
      newTodo,
    ])
  }

  const updateTodo = (todo: ITodo) => {
    setTodos(todos => todos.map(oldTodo => oldTodo.id === todo.id ? todo : oldTodo))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos => todos.filter(oldTodo => oldTodo.id !== id))
  }

  return (
    <div className={styles.todo}>
      <TodoForm setNewTodo={AddTodo} />
      <TodoList todos={todos} updateTodos={updateTodo} deleteTodo={deleteTodo}/>
      <TotalTime todos={todos}/>
    </div>
  );
}
