import { FC } from 'react';
import { EIcons } from './IconEnum';
import {
  DecreaseIcon,
  IncreaseIcon,
  StatisticIcon,
  DotsIcon,
  EditIcon,
  DeleteIcon,
  PlusIcon
} from '../icons';

export interface IIconProps {
  name: EIcons
}

const icons = {
  [EIcons.statistic]: <StatisticIcon />,
  [EIcons.dots]: <DotsIcon />,
  [EIcons.increase]: <IncreaseIcon />,
  [EIcons.decrease]: <DecreaseIcon />,
  [EIcons.edit]: <EditIcon />,
  [EIcons.delete]: <DeleteIcon />,
  [EIcons.plus]: <PlusIcon />,
}

export const Icon: FC<IIconProps> = ({ name }) => {
  return (
    <>
      {icons[name]}
    </>
  );
}
