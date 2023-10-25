import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState, } from "react";
import styles from './TodoName.module.css';

interface ITodoNameProps {
  name: string
  edit: boolean
  changeTodoName: (name: string) => void
  editTitle: () => void
}

export const TodoName: FC<ITodoNameProps> = ({ name, edit, changeTodoName, editTitle }) => {
  const [value, setValue] = useState<string>(name)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (edit) {
      ref.current?.focus()
    }
  }, [edit])

  const onDblclick = () => {
    editTitle()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      ref.current?.blur()
      changeTodoName(value)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const handleBlur = () => {
    changeTodoName(value)
  }

  return (
    <label onDoubleClick={onDblclick}>
      <input
        className={styles.input}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={!edit}
        ref={ref}
      />
    </label>
  )
}
