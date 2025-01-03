import { FC } from "react"
import { Widget } from "../Widget"
import { Text } from "../Text"
import FocusIcon from 'src/assets/icons/focus_icon.svg?react';
import styles from "./Focus.module.css";
import classNames from "classnames";

type Props = {
  data: number,
}

export const Focus: FC<Props> = ({data}) => {
  return (
    <Widget title='Фокус' gridClass={classNames('widget', data ? styles.bgActive : '', styles.focus)}>
      <Text size={64} className={styles.text}>{`${data || 0}%`}</Text>
      <FocusIcon className={classNames(data ? styles.iconActive : '', styles.iconClass)} />
    </Widget>
  )
}
