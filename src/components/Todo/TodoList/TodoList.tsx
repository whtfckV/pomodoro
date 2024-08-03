import { FC, useState } from "react";
import { GenericList, GenericListItem } from "src/components/GenericLIst";
import { generateId } from "src/utils/ts/GenerateRandomIndex";
import { TodoItem } from "./TodoItem";
import { Todo } from "src/store/todoSlice";
import { useAppSelector } from "src/store/hooks";
import styles from './TodoList.module.css'


export const TodoList: FC = () => {
  const todos = useAppSelector(state => state.todos.todos)
  const [opened, setOpened] = useState<string | null>(null)
  const [edit, setEdit] = useState<string | null>(null)
  const handler = (option: string | null) => setOpened(option)
  const editHandler = (option: string | null) => setEdit(option)

  const createTodos = (todo: Todo): GenericListItem => generateId({
    As: 'li',
    element: <TodoItem
      {...todo}
      opened={opened}
      edit={edit}
      editHandler={editHandler}
      handler={handler}
    />,
    className: styles.item,
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
