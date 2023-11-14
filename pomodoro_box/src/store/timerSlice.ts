import { createSlice } from "@reduxjs/toolkit";

interface timerState {
  time: number
  timerId: number | null
}

const MINUTES_PER_TOMATO = 25
const ONE_SECOND = 1000
const twentyFiveMinutes = MINUTES_PER_TOMATO * ONE_SECOND * 60

const initialState: timerState = {
  time: twentyFiveMinutes,
  timerId: null
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.timerId = window.setInterval(() => {
        state.time = state.time - ONE_SECOND
      }, 1000)
    },
    // takeSecond: (state) => {
    // },
  }
})

export const { startTimer } = timerSlice.actions
export default timerSlice.reducer
