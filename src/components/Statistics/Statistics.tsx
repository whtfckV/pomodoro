import { FC } from 'react'
import { Content } from '../Content'
import styles from './Statistics.module.css'
import { FirstHeading } from '../FirstHeading'

interface IStatisticsProps { }

export const Statistics: FC<IStatisticsProps> = () => {
  return (
    <Content gridClass={styles.container}>
      <FirstHeading>Ваша активность</FirstHeading>
    </Content>
  )
}
