import * as React from 'react';
import { Btn, EType } from '../Btn';
import { Icon, EIcons } from '../Icon';
import { Text, EColor } from '../Text';
import styles from "./Timer.module.css";

interface ITimerProps {
}

export const Timer: React.FunctionComponent<ITimerProps> = () => {
  return (
    <div className={styles.timer}>
      <Text size={150} color={EColor.black} weight={200} >25:00</Text>
      <Btn styleType={EType.iconOnly} className={styles.btn}>
        <Icon name={EIcons.plus} />
      </Btn>
    </div>
  );
};
