import { FC, useEffect, useState } from "react";
import { Container } from "../Container";
import { Logo } from "./Logo";
import { Statistic } from "./StatisticLink";
import { useLocation } from "react-router-dom";
import { STATISTICS } from "src/pages/StatisticsPage";
import classNames from "classnames";
import styles from "./Header.module.css";

type TMargin = '88' | '100'

export const Header: FC = () => {
  const location = useLocation()
  const [margin, setMargin] = useState<TMargin>('100')

  useEffect(() => {
    if (location.pathname === STATISTICS) {
      setMargin('88')
      return
    }
    setMargin('100')
  }, [location])

  return (
    <header className={classNames(styles.header, styles[`mb${margin}`])}>
      <Container className={styles.container}>
        <Logo />
        <Statistic />
      </Container>
    </header>
  );
}
