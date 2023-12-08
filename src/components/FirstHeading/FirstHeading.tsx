import { FC, ReactNode } from "react"
import { Text } from "../Text"

interface IFirstHeadingProps {
  children: ReactNode
  headingClass?: string
}

export const FirstHeading: FC<IFirstHeadingProps> = ({ children, headingClass }) => {
  return (
    <Text size={24} As='h2' weight={700} className={headingClass}>
      {children}
    </Text>
  )
}
