import { FC } from "react"
import { Widget } from "../Widget"

interface IFocus {
  gridClass: string
}

export const Focus: FC<IFocus> = ({ gridClass }) => {
  return (
    <Widget title='Фокус' gridClass={gridClass}>
    </Widget>
  )
}
