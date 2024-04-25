import { FC } from "react"
import { Widget } from "../Widget"
import { Text } from "../Text"
import FocusIcon from 'src/assets/icons/focus_icon.svg?react';
import { useAppSelector } from "src/store/hooks"
import styles from "./Focus.module.css";

interface IFocus {
  gridClass: string
}

export const Focus: FC<IFocus> = ({ gridClass }) => {
  const { focus } = useAppSelector(state => state.statistics)

  return (
    <Widget title='Фокус' gridClass={gridClass}>
      <Text size={64} className={styles.text}>{`${focus || 0}%`}</Text>
      <FocusIcon className={styles.iconClass} />
    </Widget>
  )
}
