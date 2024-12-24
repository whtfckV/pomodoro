import { FC, useState } from "react";
import { GenericList, GenericListItem } from "src/components/GenericLIst";
import { TodoItem } from "./TodoItem";
import { Todo } from "src/store/todoSlice";
import { useAppSelector } from "src/store/hooks";
import styles from './TodoList.module.css'


export const TodoList: FC = () => {
  const todos = useAppSelector(state => state.todos.todos)
  const [isMenuOpen, setIsMenuOpen] = useState<string | null>(null)
  const handler = (option: string | null) => setIsMenuOpen(option)

  const createTodos = (todo: Todo): GenericListItem => ({
    As: 'li',
    id: todo.id,
    element: <TodoItem
      {...todo}
      opened={isMenuOpen}
      handler={handler}
    />,
    className: styles.item,
  })

  return (
    <ul>
      <GenericList list={todos.map(createTodos)} />
    </ul>
  );
}
