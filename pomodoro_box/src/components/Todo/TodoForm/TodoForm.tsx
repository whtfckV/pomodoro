import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { Btn } from 'src/components/Btn';
import { generateId } from 'src/utils/ts/GenerateRandomIndex';
import { Error } from 'src/components/Error';
import styles from './TodoForm.module.css';

interface IFormTasksProps {
  setNewTodo: (todo: ITodo) => void
}

export interface ITodo {
  name: string
  tomatos: number
  id?: string
}

const createTodo = (name: string): ITodo => ({
  name: name,
  tomatos: 1
})

export const TodoForm: FC<IFormTasksProps> = ({ setNewTodo }) => {
  const [value, setValue] = useState<string>('')
  const [touched, setTouched] = useState<boolean>(false)
  const [valueError, setValueError] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched(true)
    setValueError(validate())

    if (validate()) return

    setNewTodo(generateId(createTodo(value)))
    setValue('')
    setTouched(false)
  }

  const validate = () => {
    if (value.length <= 3) return 'Введите больше 3-х символов'
    return ''
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} aria-description='Название задачи'>
        <input
          className={styles.input}
          type="text"
          placeholder='Название задачи'
          value={value}
          onChange={handleChange}
          aria-invalid={valueError ? 'true': undefined}
        />
        {touched && valueError && <Error>{valueError}</Error>}
      </label>
      <Btn type='submit' className={styles.btn}>Добавить</Btn>
    </form>
  )
}
