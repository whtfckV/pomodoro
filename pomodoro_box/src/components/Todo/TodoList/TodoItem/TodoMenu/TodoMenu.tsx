import { FC } from 'react';
import { Btn, EType } from 'src/components/Btn';
import { GenericList, IItem } from 'src/components/GenericLIst';
import { Icon, EIcons } from 'src/components/Icon';
import { Text, EColor } from 'src/components/Text';
import { useAppDispatch } from 'src/store/hooks';
import { decreaseTomato, increaseTomato } from 'src/store/todoSlice';
import { generateId } from 'src/utils/ts/GenerateRandomIndex';

interface ITodoMenuProps {
  id: string
  tomatos: number
  // increaseTomato: () => void
  // decreaseTomato: () => void
  editTitle: () => void
  deleteTodo: () => void
}

type TBtn = {
  icon: EIcons
  name: string
  disabled?: boolean
  onClick: () => void
}

const createBtn = ({ icon, name, disabled, onClick }: TBtn) => (
  <Btn styleType={EType.iconText} onClick={onClick} disabled={disabled || false}>
    <Icon name={icon} />
    <Text size={16} weight={300} color={EColor.grey}>{name}</Text>
  </Btn>
)

export const TodoMenu: FC<ITodoMenuProps> = ({ id, tomatos, editTitle, deleteTodo }) => {
  const dispatch = useAppDispatch()

  const btns: TBtn[] = [
    {
      icon: EIcons.increase,
      name: 'Увеличить',
      onClick: () => { dispatch(increaseTomato(id)) },
    },
    {
      icon: EIcons.decrease,
      name: 'Уменьшить',
      disabled: tomatos === 1,
      onClick: () => { dispatch(decreaseTomato(id)) },
    },
    {
      icon: EIcons.edit,
      name: 'Редактировать',
      onClick: editTitle,
    },
    {
      icon: EIcons.delete,
      name: 'Удалить',
      onClick: deleteTodo,
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
