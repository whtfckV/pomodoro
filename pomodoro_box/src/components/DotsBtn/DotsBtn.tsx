import { FC, ReactNode, useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Icon from "../Icon/Icon";
import { EIcons } from "../Icon/IconEnum";
import styles from './DotsBtn.module.css'

export interface IDotsBtnProps {
  children: ReactNode
}

const DotsBtn: FC<IDotsBtnProps> = ({ children }) => {
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
          <div className={styles.dropdown}>
            {children}
          </div>
        </Dropdown>
      )}
    </>
  );
}

export default DotsBtn
