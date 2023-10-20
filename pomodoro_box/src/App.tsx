import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Information from "./components/Information/Information";
import Title from "./components/Content/MainTitle/MainTitle";
import Todo from "./components/Todo/Todo";

function App() {
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
