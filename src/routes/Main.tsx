import { FC } from 'react'
import { Content } from 'src/components/Content'
import { Title } from 'src/components/Content/MainTitle'
import { Header } from 'src/components/Header'
import { Information } from 'src/components/Information'
import { Task } from 'src/components/Task'
import { TimeControl } from 'src/components/TimeControl'
import { Todo } from 'src/components/Todo'

export const Main: FC = () => {
  return (
    <>
      <Header />
      <Title />
      <Content>
        <Information />
        <Todo />
        <Task>
          <TimeControl />
        </Task>
      </Content>
    </>
  )
}
