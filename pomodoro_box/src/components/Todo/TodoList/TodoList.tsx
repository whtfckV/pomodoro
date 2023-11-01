import { FC, useState } from "react";
import { GenericList, IItem } from "src/components/GenericLIst";
import { generateId } from "src/utils/ts/GenerateRandomIndex";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../TodoForm";
import styles from './TodoList.module.css'
import { useAppSelector } from "src/store/hooks";

export interface ITodoListProps { }

export const TodoList: FC<ITodoListProps> = () => {
  const todos = useAppSelector(state => state.todos.todos)
  const [opened, setOpened] = useState<string | null>(null)
  const handler = (option: string | null) => setOpened(option)

  const createTodos = (todo: ITodo): IItem => generateId({
    As: 'li',
    element: <TodoItem {...todo} opened={opened} handler={handler} />,
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
