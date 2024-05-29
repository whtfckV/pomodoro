import { FC } from "react"
import { Text, EColor } from 'src/components/Text';
import { ESize, timeConvert } from "src/utils/ts/timeConvert";
import { useAppSelector } from "src/store/hooks";

export const TotalTime: FC = () => {
  const milliseconds = useAppSelector(state => state.todos.fullTime)

  return (
    <>
      {!!milliseconds &&
        <Text size={16} color={EColor.grey} >
          {timeConvert(milliseconds, ESize.middle)}
        </Text>
      }
    </>
  )
}
