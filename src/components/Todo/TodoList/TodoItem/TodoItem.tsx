import { FC, memo, useState } from "react";
import { Tomatoes } from "./Tomatoes";
import { DotsBtn } from "src/components/Todo/TodoList/TodoItem/DotsBtn";
import { TodoMenu } from "./TodoMenu";
import { Todo } from "src/store/todoSlice";
import { TodoName } from "./TodoName";
import { Popup } from "src/components/Popup";
import { Confirm } from "./Confirm/Confirm";
import { useAppDispatch } from "src/store/hooks";
import { removeTodo } from "src/store/todoSlice";
import styles from './TodoItem.module.css'

interface ITodoItemProps extends Todo {
  opened: string | null
  handler: (option: string | null) => void
  // edit: string | null
  // editHandler: (option: string | null) => void
}

export const TodoItem: FC<ITodoItemProps> = memo(({ name, tomatoes, id, opened, handler }) => {
  const dispatch = useAppDispatch()
  const [confirm, setConfirm] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)

  const editTitle = (bool: boolean) => {
    // editHandler(id)
    handler(null)
    setEdit(bool)
  }

  const deleteTodo = () => {
    if (!id) return;
    dispatch(removeTodo(id))
    setConfirm(false)
  }

  return (
    <>
      <Tomatoes tomatoCount={tomatoes} />
      <TodoName id={id} name={name} edit={edit} editTitle={editTitle} />
      <DotsBtn dropDownClass={styles.dropdown} isOpened={opened === id} handler={handler} id={id}>
        <TodoMenu
          id={id}
          tomatoes={tomatoes}
          editTitle={editTitle}
          deleteTodo={() => setConfirm(true)}
        />
      </DotsBtn>
      {confirm &&
        <Popup onClose={() => setConfirm(false)}>
          <Confirm onConfirm={deleteTodo} />
        </Popup>
      }
    </>
  );
})
