import { FC, useEffect, useState } from 'react';
import { Btn, EType } from 'src/components/Btn';
import { Text, EColor } from 'src/components/Text';
import { getFormattedMinutes } from 'src/utils/ts/formattedMinutes';
import Plus from 'src/assets/icons/plus.svg?react';
import styles from "./Time.module.css";

type tPropsTime = {
  time: number;
  addTime: () => void;
  isWorking: boolean;
  isBreak: boolean;
}

export const Time: FC<tPropsTime> = ({ time, addTime, isBreak, isWorking }) => {
  const [color, setColor] = useState<EColor>(EColor.black)


  useEffect(() => {
    if (isWorking) {
      if (isBreak) {
        setColor(EColor.green)
      } else {
        setColor(EColor.red)
      }
    } else {
      setColor(EColor.black)
    }
  }, [isWorking, isBreak])

  return (
    <div>
      <Text size={150} color={color} weight={200} transition={true} >{getFormattedMinutes(time)}</Text>
      <Btn onClick={addTime} styleType={EType.iconOnly} className={styles.btn}>
        <Plus />
      </Btn>
    </div>
  );
};
