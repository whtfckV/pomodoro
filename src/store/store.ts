import { configureStore, Middleware } from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import todoReducer from "./todoSlice";
import timerReducer from "./timerSlice";
import statisticReduser from "./statisticsSlice";

const logger = createLogger()

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    timer: timerReducer,
    statistics: statisticReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
