import { FC } from 'react'
import { Text } from 'src/components/Text'
import styles from './NoTasks.module.css'

export const NoTasks: FC = () => {
  return (
    <div className={styles.noTasks}>
      <Text As='p' size={30} weight={700} className={styles.descr}>
        У вас пока нет задач,
        добавьте свою первую задачу
      </Text>
    </div>
  )
}
