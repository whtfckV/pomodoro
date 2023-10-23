import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Statistic from "../Statistic/Statistic";
import styles from "./Header.module.css";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <Statistic />
      </Container>
    </header>
  );
}

export default Header
