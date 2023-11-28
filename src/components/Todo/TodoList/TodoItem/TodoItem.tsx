import { FC, useState } from "react";
import { Tomatoes } from "./Tomatoes";
import { DotsBtn } from "src/components/DotsBtn";
import { TodoMenu } from "./TodoMenu";
import { ITodo } from "../../TodoForm";
import { TodoName } from "./TodoName";
import { Popup } from "src/components/Popup";
import { Confirm } from "./Confirm/Confirm";
import { useAppDispatch } from "src/store/hooks";
import { removeTodo } from "src/store/todoSlice";
import styles from './TodoItem.module.css'

interface ITodoItemProps extends ITodo {
  opened: string | null
  handler: (option: string | null) => void
}

export const TodoItem: FC<ITodoItemProps> = ({ name, tomatos, id, opened, handler }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [confirm, setConfirm] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const editTitle = () => {
    setEdit(true)
  }

  const deleteTodo = () => {
    if (!id) return;
    dispatch(removeTodo(id))
    setConfirm(false)
  }

  return (
    <>
      <Tomatoes tomatoCount={tomatos} />
      <TodoName id={id} name={name} edit={edit} editTitle={editTitle} />
      <DotsBtn dropDownClass={styles.dropdown} isOpened={opened === id} handler={handler} id={id}>
        <TodoMenu
          id={id}
          tomatos={tomatos}
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
}
