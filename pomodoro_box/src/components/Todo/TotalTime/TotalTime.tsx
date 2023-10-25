import { FC } from "react"
import { ITodo } from "../TodoForm"
import { Text, EColor } from 'src/components/Text';
import { timeConvert } from "src/utils/ts/timeConvert";

interface ITotalTimeProps {
  todos: ITodo[]
}

export const TotalTime: FC<ITotalTimeProps> = ({ todos }) => {
  const minutes = todos.reduce((acc, todo) => acc += todo.tomatos * 25, 0)

  return (
    <>
      {!!todos.length &&
        <Text size={16} color={EColor.grey} >
          {timeConvert(minutes)}
        </Text>
      }
    </>
  )
}
