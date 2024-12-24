import { FC } from "react"
import { Widget } from "../Widget"
import { Text } from "../Text"
import FocusIcon from 'src/assets/icons/focus_icon.svg?react';
import { useAppSelector } from "src/store/hooks"
import styles from "./Focus.module.css";
import classNames from "classnames";

export const Focus: FC = () => {
  const { focus } = useAppSelector(state => state.statistics)

  return (
    <Widget title='Фокус' gridClass={classNames('widget', focus ? styles.bgActive : '', styles.focus)}>
      <Text size={64} className={styles.text}>{`${focus || 0}%`}</Text>
      <FocusIcon className={classNames(focus ? styles.iconActive : '', styles.iconClass)} />
    </Widget>
  )
}
