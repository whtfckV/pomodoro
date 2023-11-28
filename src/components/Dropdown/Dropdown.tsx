import classNames from "classnames";
import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from './Dropdown.module.css'

export interface IDropdownProps {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  button: HTMLButtonElement | null;
}

export const Dropdown: FC<IDropdownProps> = ({ children, className, onClose, button }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickDoc = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target) && !button?.contains(event.target)) {
        onClose?.()
      }
    }

    document.addEventListener('click', handleClickDoc)
    return () => {
      document.removeEventListener('click', handleClickDoc)
    }
  }, [onClose, button])

  const { width, height } = button!.getBoundingClientRect();
  let { x, y } = button!.getBoundingClientRect();

  x += width / 2;
  y += height;
  y += window.scrollY

  const node = document.getElementById('modal')!

  return createPortal((
    <div style={{ left: x, top: y }} className={classNames(className, styles.container)} ref={ref}>
      {children}
    </div>
  ), node);
}
