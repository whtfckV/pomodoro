import { EIcons } from './IconEnum';
import StatisticIcon from '../icons/Statistic';
import Menu from '../icons/Menu';

export interface IIconProps {
  name: EIcons
}
const icons = {
  [EIcons.statistic]: <StatisticIcon />,
  [EIcons.menu]: <Menu />,
}

export default function Icon({ name }: IIconProps) {
  return (
    <>
      {icons[name]}
    </>
  );
}
