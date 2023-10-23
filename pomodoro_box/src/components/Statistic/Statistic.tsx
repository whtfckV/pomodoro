import { FC } from "react";
import Icon from "../Icon/Icon";
import { EIcons } from "../Icon/IconEnum";
import Text from "../Text/Text";
import { Ecolor } from "../Text/TextEnum";
import styles from './Statistic.module.css';

const Statistic: FC = () => {
  return (
    <a href='/' className={styles.link}>
      <Icon name={EIcons.statistic} />
      <Text size={16} color={Ecolor.red} weight={400}>
        Статистика
      </Text>
    </a>
  );
}

export default Statistic
