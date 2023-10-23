import { FC } from "react";
import GenericList, { IItem } from "src/components/GenericLIst/GenericList";
import { generateId } from "src/utils/ts/GenerateRandomIndex";
import TodoItem from "./TodoItem/TodoItem";
import styles from './TodoList.module.css'

export interface ITodoListProps {
  todos: string[];
}

const TodoList: FC<ITodoListProps> = ({ todos }) => {
  const createTodos = (name: string): IItem => generateId({
    As: 'li',
    element: <TodoItem name={name} />,
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

export default TodoList
