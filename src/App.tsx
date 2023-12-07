import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./routes/Main";
import { Statistic } from "./components/Statistic";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/statistics',
    element: <Statistic />
  },
])

const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
