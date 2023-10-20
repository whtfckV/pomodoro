import { useRef, useState } from "react";
import Icon from "../../../../Icon/Icon";
import { EIcons } from "../../../../Icon/IconEnum";
import Dropdown from "../../../../Dropdown/Dropdown";
import {btn} from './Menu.module.css'

export default function Menu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <button className={btn} onClick={handleClick} ref={ref}>
        <Icon name={EIcons.menu} />
      </button>
      {isDropdownOpen && (
        <Dropdown button={ref.current} onClose={handleClick}>
          Open
        </Dropdown>
      )}
    </>
  );
}
