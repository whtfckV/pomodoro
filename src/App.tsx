import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MAIN, Main } from "./routes/MainPage";
import { ErrorPage } from "./routes/ErrorPage";
import { STATISTICS, StatisticsPage } from "./routes/StatisticsPage";

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
