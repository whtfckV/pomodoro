import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Btn from '../../Btn/Btn';
import { form, input } from './TodoForm.module.css';

interface IFormTasksProps {
  setNewTodo: (todo: string) => void;
}

export default function FormTasks({ setNewTodo }: IFormTasksProps) {
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
    <form className={form} onSubmit={handleSubmit}>
      <input className={input} type="text" placeholder='Название задачи' value={value} onChange={handleChange} />
      <Btn>Добавить</Btn>
    </form>
  )
}
