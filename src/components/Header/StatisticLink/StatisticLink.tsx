import { FC } from "react";
import { Icon, EIcons } from "../../Icon";
import { EColor, Text } from "../../Text";
import { Link } from "react-router-dom";
import styles from './StatisticLink.module.css';

export const Statistic: FC = () => {
  return (
    <Link to='/statistics' className={styles.link}>
      <Icon name={EIcons.statistic} />
      <Text size={16} color={EColor.red} weight={400}>
        Статистика
      </Text>
    </Link>
  );
}
