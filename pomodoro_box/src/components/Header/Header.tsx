import { FC } from "react";
import { Container } from "../Container";
import { Logo } from "./Logo";
import { Statistic } from "../Statistic";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <Statistic />
      </Container>
    </header>
  );
}
