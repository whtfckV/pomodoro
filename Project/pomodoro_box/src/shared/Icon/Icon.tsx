import { EIcons } from './enum';
import StatisticIcon from '../icons/Statistic';

export interface IIconProps {
  name: EIcons
}
const icons = {
  [EIcons.statistic]: <StatisticIcon />,
}

export default function Icon({ name }: IIconProps) {
  return (
    <>
      {icons[name]}
    </>
  );
}
