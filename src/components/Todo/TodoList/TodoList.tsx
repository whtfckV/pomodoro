import { FC, useState } from "react";
import { GenericList, GenericListItem } from "src/components/GenericLIst";
import { TodoItem } from "./TodoItem";
import { changeTodos, Todo } from "src/store/todoSlice";
import { useAppSelector } from "src/store/hooks";
import styles from './TodoList.module.css'
import { ReactSortable } from "react-sortablejs";
import { useDispatch } from "react-redux";


export const TodoList: FC = () => {
  const todos = useAppSelector(state => state.todos.todos)
  const [opened, setOpened] = useState<string | null>(null)
  const [edit, setEdit] = useState<string | null>(null)
  const handler = (option: string | null) => setOpened(option)
  const editHandler = (option: string | null) => setEdit(option)
  const dispatch = useDispatch();

  const createTodos = (todo: Todo): GenericListItem => ({
    As: 'li',
    id: todo.id,
    element: <TodoItem
      {...todo}
      opened={opened}
      edit={edit}
      editHandler={editHandler}
      handler={handler}
    />,
    className: styles.item,
  })

  const setTodos = (todosSortable: Todo[]) => {
    console.log(todos)
    console.log(todosSortable)
    dispatch(changeTodos(todosSortable));
  }

  return (
    <ReactSortable tag={'ul'} list={todos} setList={setTodos}>
      {/* <ul> */}
      <GenericList list={todos.map(createTodos)} />
      {/* </ul> */}
    </ReactSortable>
    // {!!todos.length && (
    // )}
    // {/* </> */ }
  );
}
