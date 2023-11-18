import { FC } from 'react';
import { Btn, EType } from '../Btn';
import { Icon, EIcons } from '../Icon';
import { Text, EColor } from '../Text';
import { getFormattedMinutes } from 'src/utils/ts/formattedMinutes';
import { useAppDispatch } from 'src/store/hooks';
import { addTime } from 'src/store/timerSlice';
import styles from "./Timer.module.css";

interface ITimerProps {
  ms: number
}

export const Timer: FC<ITimerProps> = ({ ms }) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(addTime())
  }

  return (
    <div className={styles.timer}>
      <Text size={150} color={EColor.black} weight={200} >{getFormattedMinutes(ms)}</Text>
      <Btn onClick={handleClick} styleType={EType.iconOnly} className={styles.btn}>
        <Icon name={EIcons.plus} />
      </Btn>
    </div>
  );
};
