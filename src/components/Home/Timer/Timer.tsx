import { FC } from 'react';
import { Btn, EType } from '../../Btn';
import { Icon, EIcons } from '../../Icon';
import { Text, EColor } from '../../Text';
import { getFormattedMinutes } from 'src/utils/ts/formattedMinutes';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { EProgress, addTime } from 'src/store/timerSlice';
import styles from "./Timer.module.css";

interface ITimerProps { }

export const Timer: FC<ITimerProps> = () => {
  const { time, progress } = useAppSelector(state => state.timer)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(addTime())
  }

  const getTextStyle = () => {
    switch (progress) {
      case EProgress.work:
        return EColor.red
      case EProgress.break:
        return EColor.green
      default:
        return EColor.black
    }
  }

  return (
    <div className={styles.timer}>
      <Text size={150} color={getTextStyle()} weight={200} transition={true} >{getFormattedMinutes(time)}</Text>
      <Btn onClick={handleClick} styleType={EType.iconOnly} className={styles.btn}>
        <Icon name={EIcons.plus} />
      </Btn>
    </div>
  );
};
