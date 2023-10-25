import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames";
import { EType } from "./BtnEnum";
import styles from './Btn.module.css';

export interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: EType;
  children: ReactNode | string;
  className?: string
}

export const Btn: FC<IBtnProps> = ({ styleType = EType.green, children, className, ...props }) => {
  const classes = classNames([
    styles[styleType],
    styles.btn,
    className
  ])

  return (
    <button className={classes} {...props}>
      {children}
    </button >
  );
}
