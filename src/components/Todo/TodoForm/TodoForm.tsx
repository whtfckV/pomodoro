import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { Btn } from 'src/components/Btn';
import { Error } from 'src/components/Error';
import styles from './TodoForm.module.css';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { addTodo } from 'src/store/todoSlice';

export const TodoForm: FC = () => {
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector(state => state.todos)
  const [value, setValue] = useState<string>('')
  const [touched, setTouched] = useState<boolean>(false)
  const [valueError, setValueError] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (valueError) setValueError('')
    setValue(e.target.value)
  }

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched(true)

    if (validate()) return

    dispatch(addTodo(value))
    setValue('')
    setTouched(false)
  }

  const validate = () => {
    let error = '';
    if (value.length <= 3) error = 'Введите больше 3-х символов'
    if (value.length > 15) error = 'Введите меньше 15-ти символов'
    if (!value) error = 'Введите название задачи'
    if (todos.find(todo => todo.name === value)) error = 'Такая задача уже существует'
    setValueError(error)
    return error
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
          aria-invalid={valueError ? 'true' : undefined}
        />
        {touched && valueError && <Error>{valueError}</Error>}
      </label>
      <Btn type='submit' className={styles.btn}>Добавить</Btn>
    </form>
  )
}
