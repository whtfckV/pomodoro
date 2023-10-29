import { FC } from "react";
import { GenericList, IItem } from "src/components/GenericLIst";
import { generateId } from "src/utils/ts/GenerateRandomIndex";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../TodoForm";
import styles from './TodoList.module.css'
import { useAppSelector } from "src/store/hooks";

export interface ITodoListProps { }

export const TodoList: FC<ITodoListProps> = () => {
  const todos = useAppSelector(state => state.todos.todos)

  const createTodos = (todo: ITodo): IItem => generateId({
    As: 'li',
    element: <TodoItem {...todo} />,
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
