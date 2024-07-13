import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MAIN, Main } from "./pages/MainPage";
import { ErrorPage } from "./pages/ErrorPage";
import { STATISTICS, StatisticsPage } from "./pages/StatisticsPage";

const router = createBrowserRouter([
  {
    path: MAIN,
    element: <Main />,
    errorElement: <ErrorPage />
  },
  {
    path: STATISTICS,
    element: <StatisticsPage />
  },
])

const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
