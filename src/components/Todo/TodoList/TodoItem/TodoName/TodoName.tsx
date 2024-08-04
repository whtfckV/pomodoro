import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState, } from "react";
import { useAppDispatch } from "src/store/hooks";
import { changeName } from "src/store/todoSlice";
import { Error } from "src/components/Error";
import styles from './TodoName.module.css';

type TodoNameProps = {
  id: string
  name: string
  edit: boolean
  editTitle: () => void
  disabledInput: () => void
}

export const TodoName: FC<TodoNameProps> = ({ id, name, edit, editTitle, disabledInput }) => {
  const [value, setValue] = useState<string>(name)
  const ref = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  const [errorValue, setErrorValue] = useState<boolean>()

  useEffect(() => {
    if (edit) {
      ref.current?.focus()
    }
  }, [edit])

  const onDblclick = () => {
    console.log('doubleClick')
    editTitle()
  }

  const updateName = () => {
    disabledInput()
    dispatch(changeName({ id, value }))
    setErrorValue(false)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (value.length < 3) {
      setErrorValue(true)
      return
    }

    if (e.key === 'Enter') {
      ref.current?.blur()
      updateName()
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const handleBlur = () => {
    if (value.length < 4) {
      setErrorValue(true)
      ref.current?.focus()
      ref.current?.setSelectionRange(ref.current?.value.length, ref.current?.value.length)
      return
    }

    updateName()
  }

  return (
    <>
      {!edit ? (
        <label onDoubleClick={onDblclick} className={styles.label}>
          {value}
          {errorValue && <Error>Введите более 3-х символов</Error>}
        </label>) : (
        <input
          className={styles.input}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          ref={ref}
        />)}
    </>
  )
}
