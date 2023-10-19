import { ReactNode } from "react";
import { container } from "./Container.module.css";
import classNames from "classnames";

export interface IContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainerProps) {
  return (
    <div className={classNames(container, className)}>
      {children}
    </div>
  );
}
