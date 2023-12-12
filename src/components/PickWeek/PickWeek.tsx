import { FC } from "react"
import Select from 'react-select'
import { GridComponent } from "../GridComponent/GridComponent"

interface IPickWeek {
  gridClass: string
}

const options = [
  { value: 'chocolate', label: 'Эта неделя' },
  { value: 'strawberry', label: 'Прошедшая неделя' },
  { value: 'vanilla', label: '2 недели назад' }
]

export const PickWeek: FC<IPickWeek> = ({ gridClass }) => {
  return (
    <GridComponent gridClass={gridClass}>
      <Select options={options} defaultValue={options[0]} />
    </GridComponent>
  )
}
