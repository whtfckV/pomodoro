import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState, } from "react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { changeName } from "src/store/todoSlice";
import { Error } from "src/components/Error";
import styles from './TodoName.module.css';

type TodoNameProps = {
  id: string
  name: string
  edit: boolean
  editTitle: (bool: boolean) => void
}

export const TodoName: FC<TodoNameProps> = ({ id, name, edit, editTitle }) => {
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector(state => state.todos)
  const [value, setValue] = useState<string>(name)
  const ref = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (edit) {
      ref.current?.focus()
    }
  }, [edit])

  const onDblclick = () => {
    editTitle(true)
  }

  const updateName = () => {
    editTitle(false)
    setError('')
    if (value !== name) {
      dispatch(changeName({ id, value }))
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value.length < 3) {
        setError('Введите больше 3-х символов')
        return
      }
      if (todos.find(todo => todo.name === value && todo.id !== id)) {
        setError('Такая задача уже существует')
        return
      }
      updateName()
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setValue(e.target.value)
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const handleBlur = () => {
    if (value.length < 3) {
      setError('Введите больше 3-х символов')
      ref.current?.focus()
      ref.current?.setSelectionRange(ref.current?.value.length, ref.current?.value.length)
      return
    }
    if (todos.find(todo => todo.name === value && todo.id !== id)) {
      setError('Такая задача уже существует')
      ref.current?.focus()
      ref.current?.setSelectionRange(ref.current?.value.length, ref.current?.value.length)
      return
    }

    updateName()
  }

  return (
    <>
      <label onDoubleClick={onDblclick} className={styles.label}>
        {edit ?
          <input
            className={styles.input}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            ref={ref}
            aria-invalid={!!error}
          /> :
          <span className={styles.name}>{name}</span>
        }
        {!!error && <Error>{error}</Error>}
      </label>
    </>
  )
}
