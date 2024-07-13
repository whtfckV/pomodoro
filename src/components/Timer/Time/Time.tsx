import { FC } from 'react';
import { Btn, EType } from 'src/components/Btn';
import { Text, EColor } from 'src/components/Text';
import { getFormattedMinutes } from 'src/utils/ts/formattedMinutes';
import Plus from 'src/assets/icons/plus.svg?react';
import { useAppSelector } from 'src/store/hooks';
import { EStatus } from 'src/store/timerSlice';
import styles from "./Time.module.css";

type tPropsTime = {
  time: number;
  addTime: () => void;
}

export const Time: FC<tPropsTime> = ({ time, addTime }) => {
  const status = useAppSelector(store => store.timer.status)

  const getTextStyle = (status: EStatus) => {
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
    <div>
      <Text size={150} color={getTextStyle(status)} weight={200} transition={true} >{getFormattedMinutes(time)}</Text>
      <Btn onClick={addTime} styleType={EType.iconOnly} className={styles.btn}>
        <Plus />
      </Btn>
    </div>
  );
};
