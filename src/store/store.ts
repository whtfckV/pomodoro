import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import timerReducer from './timerSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    timer: timerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
