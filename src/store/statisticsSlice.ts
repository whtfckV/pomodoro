import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nextTomato, stopTimer } from "./timerSlice";

interface IInitialStatisticsState {
  workingTime: number;
  breakTime: number;
  pauseWorkTime: number;
  pauseBreakTime: number;
  totalTomatoes: number;
  focus: number;
  stops: number;
}

const initialState: IInitialStatisticsState = {
  workingTime: 0,
  breakTime: 0,
  pauseWorkTime: 0,
  pauseBreakTime: 0,
  totalTomatoes: 0,
  focus: 0,
  stops: 0,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState,
  reducers: {
    addWorkingTime: (state, action: PayloadAction<number>) => {
      state.workingTime += action.payload;
    },
    addTomatoes: (state, action: PayloadAction<number>) => {
      state.totalTomatoes += action.payload;
    },
    addOneStop: (state) => {
      state.stops += 1;
    },
    addPauseWorkTime: (state, action: PayloadAction<number>) => {
      state.pauseWorkTime += action.payload;
    },
    addPauseBreakTime: (state, action: PayloadAction<number>) => {
      state.pauseBreakTime += action.payload;
    },
    addBreakTime: (state, action: PayloadAction<number>) => {
      state.breakTime += action.payload;
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
  addWorkingTime,
  addTomatoes,
  addOneStop,
  addPauseWorkTime,
  addPauseBreakTime,
  addBreakTime,
} = statisticsSlice.actions;
export default statisticsSlice.reducer;
