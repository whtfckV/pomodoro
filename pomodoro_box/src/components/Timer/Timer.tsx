import { FC } from 'react';
import { Btn, EType } from '../Btn';
import { Icon, EIcons } from '../Icon';
import { Text, EColor } from '../Text';
import styles from "./Timer.module.css";
import { getFormattedMinutes } from 'src/utils/ts/formattedMinutes';

interface ITimerProps {
  ms: number
}

export const Timer: FC<ITimerProps> = ({ ms }) => {

  return (
    <div className={styles.timer}>
      <Text size={150} color={EColor.black} weight={200} >{getFormattedMinutes(ms)}</Text>
      <Btn styleType={EType.iconOnly} className={styles.btn}>
        <Icon name={EIcons.plus} />
      </Btn>
    </div>
  );
};
