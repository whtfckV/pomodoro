import { generateId } from "../../../utils/ts/GenerateRandomIndex";
import GenericList, { IItem } from "../../GenericLIst/GenericList";
import TodoItem from "./TodoItem/TodoItem";
import { item } from './TodoList.module.css'

export interface ITodoListProps {
  todos: string[];
}

export default function TodoList({ todos }: ITodoListProps) {
  const createTodos = (name: string): IItem => generateId({
    As: 'li',
    element: <TodoItem name={name} />,
    className: item
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
