import { ReactNode } from "react";
import { EColor } from "./BtnEnum";
import classNames from "classnames";
import { btn } from './Btn.module.css';

export interface IBtnProps {
  color?: EColor;
  children: ReactNode | string;
}

export default function Btn({ color = EColor.green, children, ...props }: IBtnProps) {
  return (
    <button className={classNames(color, btn) ...props}>
      { children }
    </button >
  );
}
