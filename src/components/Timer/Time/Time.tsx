import { FC, useEffect, useState } from 'react';
import { Btn, EType } from 'src/components/Btn';
import { Text, EColor } from 'src/components/Text';
import { getFormattedMinutes } from 'src/utils/ts/formattedMinutes';
import Plus from 'src/assets/icons/plus.svg?react';
import styles from "./Time.module.css";

type tPropsTime = {
  time: number;
  addTime: () => void;
  isPause: boolean;
  isBreak: boolean;
  isStarted: boolean;
}

export const Time: FC<tPropsTime> = ({ time, addTime, isBreak, isPause, isStarted }) => {
  const [color, setColor] = useState<EColor>(EColor.black)

  useEffect(() => {
    if (!isStarted || isPause) {
      setColor(EColor.black)
      return
    }
    if (!isPause) {
      if (isBreak) {
        setColor(EColor.green)
      } else {
        setColor(EColor.red)
      }
    }
  }, [isPause, isBreak, isStarted])

  return (
    <div>
      <Text size={150} color={color} weight={200} transition={true} >{getFormattedMinutes(time)}</Text>
      <Btn onClick={addTime} styleType={EType.iconOnly} className={styles.btn}>
        <Plus />
      </Btn>
    </div>
  );
};
