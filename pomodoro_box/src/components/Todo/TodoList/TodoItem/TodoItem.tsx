import { FC, useState } from "react";
import { Tomatoes } from "./Tomatoes";
import { DotsBtn } from "src/components/DotsBtn";
import { TodoMenu } from "./TodoMenu";
import { ITodo } from "../../TodoForm";
import styles from './TodoItem.module.css'
import { TodoName } from "./TodoName";
import { Popup } from "src/components/Popup";
import { Btn, EType } from "src/components/Btn";

interface ITodoItemProps extends ITodo {
  updateTodos: (todo: ITodo) => void
  deleteItem: (id: string) => void
}

export const TodoItem: FC<ITodoItemProps> = ({ name, tomatos, id, updateTodos, deleteItem }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [confirm, setConfirm] = useState<boolean>(false)

  const increaseTomato = () => {
    updateTodos({
      id,
      name,
      tomatos: ++tomatos,
    })
  };
  const decreaseTomato = () => {
    updateTodos({
      id,
      name,
      tomatos: --tomatos,
    })
  }

  const changeName = (name: string) => {
    updateTodos({
      id,
      name,
      tomatos
    })
  }

  const editTitle = () => {
    setEdit(true)
  }

  const deleteTodo = () => {
    if (!id) return;
    setConfirm(true)
    // deleteItem(id)
  }

  const onClose = () => {
    setConfirm(false)
  }

  return (
    <>
      <Tomatoes tomatoCount={tomatos} />
      <TodoName name={name} edit={edit} changeTodoName={changeName} editTitle={editTitle} />
      <DotsBtn dropDownClass={styles.dropdown}>
        <TodoMenu tomatos={tomatos} increaseTomato={increaseTomato} decreaseTomato={decreaseTomato} editTitle={editTitle} deleteTodo={deleteTodo} />
      </DotsBtn>
      {
        <Popup open={confirm}>
          <Btn styleType={EType.redFill}>Удалить</Btn>
        </Popup>
      }
    </>
  );
}
