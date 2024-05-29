import { FC, MouseEvent, ReactNode, memo, useCallback } from 'react';
import { Btn, EType } from 'src/components/Btn';
import { GenericList, GenericListItem } from 'src/components/GenericLIst';
import { Text, EColor } from 'src/components/Text';
import { useAppDispatch } from 'src/store/hooks';
import { decreaseTomato, increaseTomato } from 'src/store/todoSlice';
import { generateId } from 'src/utils/ts/GenerateRandomIndex';
import Increase from 'src/assets/icons/increase.svg?react'
import Decrease from 'src/assets/icons/decrease.svg?react'
import Edit from 'src/assets/icons/edit.svg?react'
import Delete from 'src/assets/icons/delete.svg?react'

type TodoMenuProps = {
  id: string
  tomatos: number
  editTitle: () => void
  deleteTodo: () => void
}

type TBtn = {
  icon: ReactNode
  name: string
  disabled?: boolean
  onClick: (e: MouseEvent) => void
}

const createBtn = ({ icon, name, disabled, onClick }: TBtn) => (
  <Btn styleType={EType.iconText} onClick={onClick} disabled={disabled || false}>
    {icon}
    <Text size={16} weight={300} color={EColor.grey}>{name}</Text>
  </Btn>
)

export const TodoMenu: FC<TodoMenuProps> = memo(({ id, tomatos, editTitle, deleteTodo }) => {
  const dispatch = useAppDispatch()

  const handleIncrease = useCallback(() => {
    dispatch(increaseTomato(id))
  }, [id, dispatch])

  const handleDecrease = useCallback(() => {
    dispatch(decreaseTomato(id))
  }, [id, dispatch])

  const handleEdit = useCallback((e: MouseEvent) => {
    e.stopPropagation()
    editTitle()
  }, [editTitle])

  const handleDelete = useCallback((e: MouseEvent) => {
    e.stopPropagation()
    deleteTodo()
  }, [deleteTodo])

  const btns: TBtn[] = [
    {
      icon: <Increase />,
      name: 'Увеличить',
      onClick: handleIncrease,
    },
    {
      icon: <Decrease />,
      name: 'Уменьшить',
      disabled: tomatos === 1,
      onClick: handleDecrease,
    },
    {
      icon: <Edit />,
      name: 'Редактировать',
      onClick: handleEdit,
    },
    {
      icon: <Delete />,
      name: 'Удалить',
      onClick: handleDelete,
    },
  ]

  return (
    <ul>
      <GenericList list={btns.map((btn: TBtn): GenericListItem => generateId({
        As: 'li',
        element: createBtn(btn)
      }))} />
    </ul>
  )
})
