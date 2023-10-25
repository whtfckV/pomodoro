import { FC, ReactNode } from "react";
import styles from './TimeControl.module.css'

interface ITimeControlProps {
  children: ReactNode
}

export const TimeControl: FC<ITimeControlProps> = ({ children }) => {
  return (
    <div className={styles.timeControl}>
      {children}
    </div>
  );
};
