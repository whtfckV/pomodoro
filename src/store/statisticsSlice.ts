import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nextTomato, stopTimer } from "./timerSlice";
import { WORK_TIME } from "./constants";

// TODO
// СДЕЛАТЬ СБОР СТАТИСТИКИ ПО ПОМИДОРУ С ДАТОЙ
// ВРЕМЕНИ РАБОТЫ И ПАУЗ АНАЛОГИЧКО

interface IInitialStatisticsState {
  allTime: number;
  pauseTime: number;
  totalTomatoes: number;
  focus: number;
  stops: number;
}

type Time = {
  total: number;
  pause: number;
}

const initialState: IInitialStatisticsState = {
  allTime: 0,
  pauseTime: 0,
  totalTomatoes: 0,
  focus: 0,
  stops: 0,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState,
  reducers: {
    addTime: (state, action: PayloadAction<Time>) => {
      state.allTime += action.payload.total;
      state.pauseTime += action.payload.pause;
      state.focus = Math.round((state.totalTomatoes * WORK_TIME) / state.allTime * 100)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(nextTomato, (state) => {
        state.totalTomatoes++;
      })
      .addCase(stopTimer, (state) => {
        state.stops++;
      });
  },
});

export const {
  addTime,
  // addTomatoes,
} = statisticsSlice.actions;
export default statisticsSlice.reducer;
