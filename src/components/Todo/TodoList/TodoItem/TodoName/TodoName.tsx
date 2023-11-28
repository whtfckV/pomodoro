import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState, } from "react";
import styles from './TodoName.module.css';
import { useAppDispatch } from "src/store/hooks";
import { changeName } from "src/store/todoSlice";

interface ITodoNameProps {
  id: string
  name: string
  edit: boolean
  editTitle: () => void
}

export const TodoName: FC<ITodoNameProps> = ({ id, name, edit, editTitle }) => {
  const [value, setValue] = useState<string>(name)
  const ref = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()

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
      dispatch(changeName({ id, value }))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const handleBlur = () => {
    dispatch(changeName({ id, value }))
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
