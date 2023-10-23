import { FC, useState } from "react";
import Tomatoes from "./Tomatoes/Tomatoes";
import DotsBtn from "src/components/DotsBtn/DotsBtn";
import TodoMenu from "./TodoMenu/TodoMenu";

export interface ITodoItemProps {
  name: string;
}

const TodoItem: FC<ITodoItemProps> = ({ name }) => {
  const [tomatoCount, setTomatoCount] = useState(1)

  const increaseTomato = () => {
    setTomatoCount(tomatoCount + 1)
  };
  const decreaseTomato = () => {
    setTomatoCount(tomatoCount - 1)
  }
  return (
    <>
      <Tomatoes tomatoCount={tomatoCount} />
      {name}
      <DotsBtn>
        <TodoMenu increaseTomato={increaseTomato} decreaseTomato={decreaseTomato} />
      </DotsBtn>
    </>
  );
}

export default TodoItem
