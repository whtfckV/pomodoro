import { FC, ReactNode, useRef, useState } from "react";
import { Dropdown } from "../Dropdown";
import { EIcons, Icon } from "../Icon";
import styles from './DotsBtn.module.css'

export interface IDotsBtnProps {
  children: ReactNode
  dropDownClass?: string
}

export const DotsBtn: FC<IDotsBtnProps> = ({ children, dropDownClass }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <button className={styles.btn} onClick={handleClick} ref={ref}>
        <Icon name={EIcons.dots} />
      </button>
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
