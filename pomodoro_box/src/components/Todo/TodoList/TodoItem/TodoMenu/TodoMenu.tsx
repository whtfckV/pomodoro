import { FC } from 'react';
import Btn from 'src/components/Btn/Btn';
import { EType } from 'src/components/Btn/BtnEnum';
import GenericList, { IItem } from 'src/components/GenericLIst/GenericList';
import Icon from 'src/components/Icon/Icon';
import { EIcons } from 'src/components/Icon/IconEnum';
import Text from 'src/components/Text/Text';
import { Ecolor } from 'src/components/Text/TextEnum';
import { generateId } from 'src/utils/ts/GenerateRandomIndex';

interface ITodoMenuProps {
  increaseTomato: () => void;
  decreaseTomato: () => void;
}

type TBtn = {
  icon: EIcons
  name: string
}

const btns: TBtn[] = [
  {
    icon: EIcons.increase,
    name: 'Увеличить',
  },
  {
    icon: EIcons.decrease,
    name: 'Уменьшить',
  },
  {
    icon: EIcons.edit,
    name: 'Редактировать',
  },
  {
    icon: EIcons.delete,
    name: 'Удалить',
  },
]

const createBtn = ({ icon, name }: TBtn, hadlers: (() => void)[], i: number) => (
  <Btn type={EType.icon} onClick={hadlers[i]}>
    <Icon name={icon} />
    <Text size={16} weight={300} color={Ecolor.grey}>{name}</Text>
  </Btn>
)

const TodoMenu: FC<ITodoMenuProps> = ({ increaseTomato, decreaseTomato }) => {
  const handlers = [
    increaseTomato,
    decreaseTomato
  ]
  return (
    <ul>
      <GenericList list={btns.map((btn: TBtn, i): IItem => generateId({
        As: 'li',
        element: createBtn(btn, handlers, i)
      }))} />
    </ul>
  )
}

export default TodoMenu
