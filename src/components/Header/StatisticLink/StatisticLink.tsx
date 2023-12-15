import { FC } from "react";
import { EColor, Text } from "../../Text";
import { Link } from "react-router-dom";
import StatisticIcon from 'src/assets/icons/statistic.svg?react'
import styles from './StatisticLink.module.css';

export const Statistic: FC = () => {
  return (
    <Link to='/statistics' className={styles.link}>
      <StatisticIcon />
      <Text size={16} color={EColor.red} weight={400}>
        Статистика
      </Text>
    </Link>
  );
}
