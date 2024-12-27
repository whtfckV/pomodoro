import { FC, useState } from "react"
import Select, { SingleValue } from 'react-select'
import { GridComponent } from "../GridComponent/GridComponent"
import styles from './PickWeek.module.css'

type TWeek = 'thisWeek' |  'lastWeek' |  'twoWeeksAgo'
type WeekOption = {
  value: TWeek
  label: string
}

const options: WeekOption[] = [
  { value: 'thisWeek', label: 'Эта неделя' },
  { value: 'lastWeek', label: 'Прошедшая неделя' },
  { value: 'twoWeeksAgo', label: '2 недели назад' }
]

export const PickWeek: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<WeekOption | null>(options[0]);

  const handleChange = (option: SingleValue<WeekOption>) => {
    setSelectedOption(option);
  }

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <GridComponent gridClass={styles.week}>
      <Select
        styles={{
          control: (base, state) => ({
            ...base,
            border: 'none',
            borderRadius: 0,
            backgroundColor: 'var(--greyF4)',
            boxShadow: state.isFocused ? '0 0 0 1px var(--teno-red)' : 'none',
          }),
          valueContainer: (base) => ({
            ...base,
            padding: '4px 11px'
          }),
          indicatorsContainer: (base) => ({
            ...base,
            padding: '9.5px'
          }),
          menu: (base) => ({
            ...base,
            margin: 0,
            borderRadius: 0,
            backgroundColor: 'var(--greyF4)',
            boxShadow: 'none',
          }),
          menuList: (base) => ({
            ...base,
            padding: 0,
          }),
          option: (base, state) => ({
            ...base,
            padding: '15px 19px',
            borderTop: '1px solid var(--greyDE)',
            backgroundColor: state.isFocused ? 'var(--greyDE)' : 'var(--greyF4)',
            transition: 'background-color .3s ease'
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: 'var(--teno-red)',
            rotate: open ? '180deg' : '0',
            transition: 'rotate .3s ease'
          })
        }}
        classNames={{
          option: () => styles.option
        }}
        options={options}
        hideSelectedOptions={true}
        // defaultValue={options[0]}
        onChange={handleChange}
        value={selectedOption}
        onMenuClose={handleClose}
        onMenuOpen={handleOpen}
        components={{ IndicatorSeparator: null }}
        isSearchable={false}
      />
    </GridComponent>
  )
}
