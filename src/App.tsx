import { FC } from "react";
import { Header } from "./components/Header";
import { Title } from "./components/Content/MainTitle";
import { Content } from "./components/Content";
import { Information } from "./components/Information";
import { Todo } from "./components/Todo";
import { Task } from "./components/Task";
import { TimeControl } from "./components/TimeControl";


const App: FC = () => {
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
  );
}

export default App;
