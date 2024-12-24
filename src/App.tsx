import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MAIN, Main } from "./pages/MainPage";
import { ErrorPage } from "./pages/ErrorPage";
import { STATISTICS, StatisticsPage } from "./pages/StatisticsPage";
import { TimerPage } from "./pages/TimerPage";

const router = createBrowserRouter([
  {
    path: MAIN,
    element: <Main />,
    children: [
      {
        path: '',
        element: <TimerPage />,
      },
      {
        path: STATISTICS,
        element: <StatisticsPage />
      }
    ],
    errorElement: <ErrorPage />
  },
])

const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
