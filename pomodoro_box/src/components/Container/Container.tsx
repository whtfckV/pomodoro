import { FC, ReactNode } from "react";
import styles from "./Container.module.css";
import classNames from "classnames";

export interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<IContainerProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
  );
}

export default Container
