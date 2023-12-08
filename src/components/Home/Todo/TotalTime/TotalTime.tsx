import { FC } from "react"
import { Text, EColor } from 'src/components/Text';
import { timeConvert } from "src/utils/ts/timeConvert";
import { useAppSelector } from "src/store/hooks";

interface ITotalTimeProps { }

export const TotalTime: FC<ITotalTimeProps> = () => {
  const minutes = useAppSelector(state => state.todos.fullTime)
  // const minutes = todos.reduce((acc, todo) => acc += todo.tomatos * 25, 0)

  return (
    <>
      {!!minutes &&
        <Text size={16} color={EColor.grey} >
          {timeConvert(minutes)}
        </Text>
      }
    </>
  )
}
