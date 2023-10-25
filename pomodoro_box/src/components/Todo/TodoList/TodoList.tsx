import { FC } from "react";
import { GenericList, IItem } from "src/components/GenericLIst";
import { generateId } from "src/utils/ts/GenerateRandomIndex";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../TodoForm";
import styles from './TodoList.module.css'

export interface ITodoListProps {
  todos: ITodo[]
  updateTodos: (todo: ITodo) => void
  deleteTodo: (id: string) => void
}

export const TodoList: FC<ITodoListProps> = ({ todos, updateTodos, deleteTodo }) => {
  const createTodos = (todo: ITodo): IItem => generateId({
    As: 'li',
    element: <TodoItem updateTodos={updateTodos} deleteItem={deleteTodo} {...todo} />,
    className: styles.item
  })
  return (
    <>
      {!!todos.length && (
        <ul>
          <GenericList list={todos.map(createTodos)} />
        </ul>
      )}
    </>
  );
}
