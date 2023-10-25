import { FC } from "react";
import { Icon, EIcons } from "../Icon";
import { EColor, Text } from "../Text";
import styles from './Statistic.module.css';

export const Statistic: FC = () => {
  return (
    <a href='/' className={styles.link}>
      <Icon name={EIcons.statistic} />
      <Text size={16} color={EColor.red} weight={400}>
        Статистика
      </Text>
    </a>
  );
}
