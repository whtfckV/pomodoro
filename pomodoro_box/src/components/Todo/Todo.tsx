import { useState } from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import {todo} from './Todo.module.css'

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);

  const AddTodo = (newTodo: string) => {
    setTodos([
      newTodo,
      ...todos,
    ])
  }

  return (
    <div className={todo}>
      <TodoForm setNewTodo={AddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
