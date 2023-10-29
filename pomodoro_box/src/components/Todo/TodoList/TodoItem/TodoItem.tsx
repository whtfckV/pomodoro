import { FC, useState } from "react";
import { Tomatoes } from "./Tomatoes";
import { DotsBtn } from "src/components/DotsBtn";
import { TodoMenu } from "./TodoMenu";
import { ITodo } from "../../TodoForm";
import { TodoName } from "./TodoName";
import { Popup } from "src/components/Popup";
import { Confirm } from "./Confirm/Confirm";
import styles from './TodoItem.module.css'
import { useAppDispatch } from "src/store/hooks";
import { removeTodo } from "src/store/todoSlice";

interface ITodoItemProps extends ITodo { }

export const TodoItem: FC<ITodoItemProps> = ({ name, tomatos, id }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [confirm, setConfirm] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  // const increaseTomato = () => {
  //   updateTodos({
  //     id,
  //     name,
  //     tomatos: ++tomatos,
  //   })
  // };
  // const decreaseTomato = () => {
  //   updateTodos({
  //     id,
  //     name,
  //     tomatos: --tomatos,
  //   })
  // }

  // const changeName = (name: string) => {
  //   updateTodos({
  //     id,
  //     name,
  //     tomatos
  //   })
  // }

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
      <DotsBtn dropDownClass={styles.dropdown}>
        <TodoMenu
          id={id}
          tomatos={tomatos}
          // increaseTomato={increaseTomato}
          // decreaseTomato={decreaseTomato}
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
