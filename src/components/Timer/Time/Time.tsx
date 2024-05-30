import { FC } from 'react';
import { Btn, EType } from 'src/components/Btn';
import { Text, EColor } from 'src/components/Text';
import { getFormattedMinutes } from 'src/utils/ts/formattedMinutes';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { EStatus, addTime } from 'src/store/timerSlice';
import styles from "./Time.module.css";
import Plus from 'src/assets/icons/plus.svg?react';

export const Time: FC = () => {
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
    <div className={styles.time}>
      <Text size={150} color={getTextStyle()} weight={200} transition={true} >{getFormattedMinutes(time)}</Text>
      <Btn onClick={handleClick} styleType={EType.iconOnly} className={styles.btn}>
        <Plus />
      </Btn>
    </div>
  );
};
