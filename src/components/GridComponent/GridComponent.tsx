import { FC, ReactNode } from "react"
import { Text } from "../Text"

interface IGridComponent {
  gridClass: string
  children?: ReactNode
  title?: string
  titleClass?: string
}

export const GridComponent: FC<IGridComponent> = ({ gridClass, title, children, titleClass }) => {
  return (
    <div className={gridClass}>
      {title ? <Text As='h3' size={24} weight={700} className={titleClass || ''}>{title}</Text> : ''}
      {children}
    </div>
  )
}
