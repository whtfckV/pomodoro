import Container from "../Container/Container";
import Logo from "./Logo/Logo";
import Statistic from "./Statistic/Statistic";
import { header, container } from "./Header.module.css";

export interface IHeaderProps { }

export default function Header() {
  return (
    <header className={header}>
      <Container className={container}>
        <Logo />
        <Statistic />
      </Container>
    </header>
  );
}
