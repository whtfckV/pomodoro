import { ReactNode } from "react";
import { createPortal } from "react-dom";

export interface IDropdownProps {
  children: ReactNode;
  className?: string;
  onClose: () => void;
  button: HTMLButtonElement | null;
}

export default function Dropdown({ children, className, onClose, button }: IDropdownProps) {

  if (!button) return null

  const { width, height } = button.getBoundingClientRect();
  let { x, y } = button.getBoundingClientRect();

  x += width / 2;
  y += height;
  y += window.scrollY

  const node = document.getElementById('modal')
  if (!node) return null

  return createPortal((
    <div style={{ left: x, top: y }} className={className}>
      {children}
    </div>
  ), node);
}
