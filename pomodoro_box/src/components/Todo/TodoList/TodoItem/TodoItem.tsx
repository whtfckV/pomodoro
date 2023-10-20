import { useState } from "react";
import Tomatoes from "./Tomatoes/Tomatoes";
import Menu from "./Menu/Menu";

export interface ITodoItemProps {
  name: string;
}

export default function TodoItem({ name }: ITodoItemProps) {
  const [tomatoCount, setTomatoCount] = useState(1)
  return (
    <>
      <Tomatoes tomatoCount={tomatoCount} />
      {name}
      <Menu />
    </>
  );
}
