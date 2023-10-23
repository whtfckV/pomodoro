import { FC, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { EType } from "./BtnEnum";
import styles from './Btn.module.css';

export interface IBtnProps extends HTMLAttributes<HTMLButtonElement> {
  type?: EType;
  children: ReactNode | string;
}

const Btn: FC<IBtnProps> = ({ type = EType.green, children, ...props }) => {
  const classes = classNames([
    styles[type],
    styles.btn
  ])
  return (
    <button className={classes} {...props}>
      {children}
    </button >
  );
}

export default Btn
