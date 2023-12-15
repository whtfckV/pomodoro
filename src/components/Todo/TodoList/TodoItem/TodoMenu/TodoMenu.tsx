import { FC, MouseEvent, ReactNode } from 'react';
import { Btn, EType } from 'src/components/Btn';
import { GenericList, IItem } from 'src/components/GenericLIst';
import { Text, EColor } from 'src/components/Text';
import { useAppDispatch } from 'src/store/hooks';
import { decreaseTomato, increaseTomato } from 'src/store/todoSlice';
import { generateId } from 'src/utils/ts/GenerateRandomIndex';
import Increase from 'src/assets/icons/increase.svg?react'
import Decrease from 'src/assets/icons/decrease.svg?react'
import Edit from 'src/assets/icons/edit.svg?react'
import Delete from 'src/assets/icons/delete.svg?react'

interface ITodoMenuProps {
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

export const TodoMenu: FC<ITodoMenuProps> = ({ id, tomatos, editTitle, deleteTodo }) => {
  const dispatch = useAppDispatch()

  const btns: TBtn[] = [
    {
      icon: <Increase />,
      name: 'Увеличить',
      onClick: () => { dispatch(increaseTomato(id)) },
    },
    {
      icon: <Decrease />,
      name: 'Уменьшить',
      disabled: tomatos === 1,
      onClick: () => { dispatch(decreaseTomato(id)) },
    },
    {
      icon: <Edit />,
      name: 'Редактировать',
      onClick: (e: MouseEvent) => {
        e.stopPropagation()
        editTitle()
      },
    },
    {
      icon: <Delete />,
      name: 'Удалить',
      onClick: (e: MouseEvent) => {
        e.stopPropagation()
        deleteTodo()
      },
    },
  ]

  return (
    <ul>
      <GenericList list={btns.map((btn: TBtn): IItem => generateId({
        As: 'li',
        element: createBtn(btn)
      }))} />
    </ul>
  )
}
