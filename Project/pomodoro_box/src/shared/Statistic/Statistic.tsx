import Text from "../Text/Text";
import { Ecolor } from "../Text/text";
import { link } from './Statistic.module.css';

export default function Statistic() {
  return (
    <a href='/' className={link}>
      <Text size={16} color={Ecolor.red} weight={400}>
        Статистика
      </Text>
    </a>
  );
}
