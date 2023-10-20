import { HTMLAttributes, ReactNode } from "react";
import { EColor } from "./BtnEnum";
import classNames from "classnames";
import styles from './Btn.module.css';

export interface IBtnProps extends HTMLAttributes<HTMLButtonElement> {
  color?: EColor;
  children: ReactNode | string;
}

export default function Btn({ color = EColor.green, children, ...props }: IBtnProps) {
  const classes = classNames([
    styles[color],
    styles.btn
  ])
  return (
    <button className={classes} {...props}>
      {children}
    </button >
  );
}
