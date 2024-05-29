import { FC } from 'react';
import { Btn, EType } from '../Btn';
import { Text, EColor } from '../Text';
import { getFormattedMinutes } from 'src/utils/ts/formattedMinutes';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { EStatus, addTime } from 'src/store/timerSlice';
import styles from "./Timer.module.css";
import Plus from 'src/assets/icons/plus.svg?react';

export const Timer: FC = () => {
  const { time, status } = useAppSelector(state => state.timer)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(addTime())
  }

  const getTextStyle = () => {
    switch (status) {
      case EStatus.work:
        return EColor.red
      case EStatus.break:
        return EColor.green
      default:
        return EColor.black
    }
  }

  return (
    <div className={styles.timer}>
      <Text size={150} color={getTextStyle()} weight={200} transition={true} >{getFormattedMinutes(time)}</Text>
      <Btn onClick={handleClick} styleType={EType.iconOnly} className={styles.btn}>
        <Plus />
      </Btn>
    </div>
  );
};
