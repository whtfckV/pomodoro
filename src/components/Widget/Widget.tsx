import { FC, ReactElement, SVGProps } from "react"
import { Text } from "../Text"
import { GridComponent } from "../GridComponent/GridComponent"

interface IWidget {
  title: string
  gridClass: string
  unit?: string,
  data: number
  icon: ReactElement
}

export const Widget: FC<IWidget> = ({ gridClass, title, unit, data, icon }) => {
  return (
    <GridComponent gridClass={gridClass}>
      <Text As='h3' size={24} weight={700}>
        {title}
      </Text>
      <Text size={64} >{`${data || 0}${unit || ''}`}</Text>
      {icon}
    </GridComponent>
  )
}
