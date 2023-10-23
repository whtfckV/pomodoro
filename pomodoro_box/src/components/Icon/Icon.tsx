import { EIcons } from './IconEnum';
import StatisticIcon from '../icons/StatisticIcon';
import DotsIcon from '../icons/DotsIcon';
import { FC } from 'react';
import IncreaseIcon from '../icons/IncreaseIcon';
import DecreaseIcon from '../icons/DecreaseIcon';
import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon';

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
}

const Icon: FC<IIconProps> = ({ name }) => {
  return (
    <>
      {icons[name]}
    </>
  );
}

export default Icon
