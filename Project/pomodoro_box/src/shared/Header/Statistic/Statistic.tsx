import Icon from "../../Icon/Icon";
import { EIcons } from "../../Icon/enum";
import Text from "../../Text/Text";
import { Ecolor } from "../../Text/enum";
import { link } from './Statistic.module.css';

export default function Statistic() {
  return (
    <a href='/' className={link}>
      <Icon name={EIcons.statistic} />
      <Text size={16} color={Ecolor.red} weight={400}>
        Статистика
      </Text>
    </a>
  );
}
