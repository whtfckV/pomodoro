import { FC } from 'react'
import { Content } from '../Content'
import { Information } from '../Information'
import { Task } from '../Task'
import { Timer } from '../Timer'
import { Todo } from '../Todo'
import styles from './Home.module.css'

export const Home: FC = () => {
  return (
    <Content gridClass={styles.container}>
      <Information />
      <Todo />
      <Task>
        <Timer />
      </Task>
    </Content>
  )
}
