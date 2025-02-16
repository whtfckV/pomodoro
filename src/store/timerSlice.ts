import { createSlice } from "@reduxjs/toolkit";
import { removeTodo } from "./todoSlice";

export enum EStatus {
  work = "work",
  workPause = "workPause",
  break = "break",
  breakPause = "breakPause",
  nothing = "nothing",
}

type InitialTimerState = {
  isPause: boolean;
  isStarted: boolean;
  isBreak: boolean;
  currentTomato: number;
};

const initialState: InitialTimerState = {
  isPause: false,
  isStarted: false,
  isBreak: false,
  currentTomato: 1,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    start: (state) => {
      state.isStarted = true;
      // state.isPause = false
    },
    pause: (state) => {
      state.isPause = true;
    },
    stopTimer: (state) => {
      state.isStarted = false;
    },
    contin: (state) => {
      state.isPause = false;
    },
    startBreak: (state) => {
      state.isBreak = true;
      state.isStarted = false;
    },
    nextTomato: (state) => {
      state.currentTomato++;
      state.isBreak = false;
      state.isStarted = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeTodo, (state) => {
      state.isStarted = false;
      state.isPause = false;
      state.isBreak = false;
      state.currentTomato = 1;
    });
  },
});

export const {
  start,
  pause,
  stopTimer,
  contin,
  startBreak,
  nextTomato,
} = timerSlice.actions;
export default timerSlice.reducer;
