import {tomato} from './Tomatoes.module.css'

export interface ITomatoesProps {
  tomatoCount: number;
}

export default function Tomatoes({ tomatoCount }: ITomatoesProps) {
  return (
    <span className={tomato}>
      {tomatoCount}
    </span>
  );
}
