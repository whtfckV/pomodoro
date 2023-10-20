import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Information from "./components/Information/Information";
import Title from "./components/Content/MainTitle/MainTitle";
import FormTasks from "./components/FormTasks/FormTasks";

function App() {
  return (
    <>
      <Header />
      <Title />
      <Content>
        <Information />
        <FormTasks />
      </Content>
    </>
  );
}

export default App;
