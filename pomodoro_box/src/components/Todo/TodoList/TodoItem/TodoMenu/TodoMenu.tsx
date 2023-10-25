import { FC } from 'react';
import { Btn, EType } from 'src/components/Btn';
import { GenericList, IItem } from 'src/components/GenericLIst';
import { Icon, EIcons } from 'src/components/Icon';
import { Text, EColor } from 'src/components/Text';
import { generateId } from 'src/utils/ts/GenerateRandomIndex';

interface ITodoMenuProps {
  increaseTomato: () => void
  decreaseTomato: () => void
  editTitle: () => void
  deleteTodo: () => void
}

type TBtn = {
  icon: EIcons
  name: string
  onClick: () => void
}

const createBtn = ({ icon, name, onClick }: TBtn) => (
  <Btn styleType={EType.iconText} onClick={onClick}>
    <Icon name={icon} />
    <Text size={16} weight={300} color={EColor.grey}>{name}</Text>
  </Btn>
)

export const TodoMenu: FC<ITodoMenuProps> = ({ increaseTomato, decreaseTomato, editTitle, deleteTodo }) => {
  const btns: TBtn[] = [
    {
      icon: EIcons.increase,
      name: 'Увеличить',
      onClick: increaseTomato
    },
    {
      icon: EIcons.decrease,
      name: 'Уменьшить',
      onClick: decreaseTomato
    },
    {
      icon: EIcons.edit,
      name: 'Редактировать',
      onClick: editTitle
    },
    {
      icon: EIcons.delete,
      name: 'Удалить',
      onClick: deleteTodo
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
