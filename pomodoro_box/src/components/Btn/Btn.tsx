import { ButtonHTMLAttributes, DetailedHTMLProps, ForwardRefRenderFunction, ReactNode, forwardRef } from "react";
import classNames from "classnames";
import { EType } from "./BtnEnum";
import styles from './Btn.module.css';

export interface IBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  styleType?: EType;
  children: ReactNode | string;
  className?: string
}

// НУЖНА ПОМОЩЬ С ТИПАМИ
export const Btn: ForwardRefRenderFunction<HTMLButtonElement, IBtnProps> =
  forwardRef(({ styleType = EType.green, children, className, ...props }, ref) => {
    const classes = classNames([
      styles[styleType],
      styles.btn,
      className
    ])

    return (
      <button className={classes} {...props} ref={ref}>
        {children}
      </button >
    );
  })
