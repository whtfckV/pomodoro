import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EState {
  off = 'off',
  work = 'work',
  pause = 'pause',
  break = 'break'
}

interface timerState {
  timerState: EState
  time: number
  currentTomato: number
}

const MINUTES_PER_TOMATO = 25
const ONE_SECOND = 1000
const twentyFiveMinutes = MINUTES_PER_TOMATO * ONE_SECOND * 60

const initialState: timerState = {
  timerState: EState.off,
  time: twentyFiveMinutes,
  currentTomato: 1
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.timerState = EState.work
    },
    decriseSecond: (state) => {
      state.time = state.time - 1000
    },
    pauseTimer: (state, action: PayloadAction<number>) => {
      clearInterval(action.payload)
      state.timerState = EState.pause
      console.log(EState.pause)
    },
    stopTimer: (state, action: PayloadAction<number>) => {
      clearInterval(action.payload)
      state.time = twentyFiveMinutes
    }
  }
})

export const { startTimer, decriseSecond, pauseTimer, stopTimer } = timerSlice.actions
export default timerSlice.reducer
