import { FC, useState } from "react";
import { Tomatoes } from "./Tomatoes";
import { DotsBtn } from "src/components/DotsBtn";
import { TodoMenu } from "./TodoMenu";
import { ITodo } from "../../TodoForm";
import { TodoName } from "./TodoName";
import { Popup } from "src/components/Popup";
import { Btn, EType } from "src/components/Btn";
import { Text } from "src/components/Text";
import styles from './TodoItem.module.css'

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
    deleteItem(id)
    setConfirm(false)
  }

  return (
    <>
      <Tomatoes tomatoCount={tomatos} />
      <TodoName name={name} edit={edit} changeTodoName={changeName} editTitle={editTitle} />
      <DotsBtn dropDownClass={styles.dropdown}>
        <TodoMenu
          tomatos={tomatos}
          increaseTomato={increaseTomato}
          decreaseTomato={decreaseTomato}
          editTitle={editTitle}
          deleteTodo={() => setConfirm(true)}
        />
      </DotsBtn>
      {confirm &&
        <Popup onClose={() => setConfirm(false)}>
          <Text className={styles.title} As='h3' size={24} weight={400} >Удалить задачу?</Text>
          <Btn onClick={deleteTodo} styleType={EType.redFill}>Удалить</Btn>
        </Popup>
      }
    </>
  );
}
