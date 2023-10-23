import { FC } from "react";
import Header from "./components/Header/Header";
import Title from "./components/Content/MainTitle/MainTitle";
import Content from "./components/Content/Content";
import Information from "./components/Information/Information";
import Todo from "./components/Todo/Todo";

const App: FC = () => {
  return (
    <>
      <Header />
      <Title />
      <Content>
        <Information />
        <Todo />
      </Content>
    </>
  );
}

export default App;
