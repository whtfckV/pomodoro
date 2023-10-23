import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import Btn from 'src/components/Btn/Btn';
import styles from './TodoForm.module.css';

interface IFormTasksProps {
  setNewTodo: (todo: string) => void;
}

const TodoForm: FC<IFormTasksProps> = ({ setNewTodo }) => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewTodo(value)
    setValue('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" placeholder='Название задачи' value={value} onChange={handleChange} />
      <Btn>Добавить</Btn>
    </form>
  )
}

export default TodoForm
