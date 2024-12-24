import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Dropdown } from "../../../../Dropdown";
import { Btn, EType } from "../../../../Btn";
import styles from './DotsBtn.module.css'
import Dots from 'src/assets/icons/dots.svg?react'

export type DotsBtnProps = {
  children: ReactNode
  dropDownClass?: string
  isOpened: boolean
  handler: (option: string | null) => void
  id: string
}

export const DotsBtn: FC<DotsBtnProps> = ({ children, dropDownClass, isOpened, handler, id }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setDropdownOpen(!!isOpened)
  }, [isOpened])

  const handleClick = (target: Node | null) => {
    if (target === ref.current || !target?.contains(ref.current)) {
      return
    }
    handler(null);
  }

  const handleMenuOpen = () => {
    handler(id)
  }

  return (
    <>
      <Btn styleType={EType.iconOnly} className={styles.btn} onClick={handleMenuOpen} ref={ref}>
        <Dots />
      </Btn>
      {isDropdownOpen && (
        <Dropdown button={ref.current} onClose={handleClick}>
          <div className={dropDownClass}>
            {children}
          </div>
        </Dropdown>
      )}
    </>
  );
}
