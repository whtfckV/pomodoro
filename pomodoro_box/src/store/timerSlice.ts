import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EState {
  off = 'off',
  work = 'work',
  workPause = 'workPause',
  break = 'break',
  breakPause = 'breakPause'
}

interface timerState {
  timerId: number | null
  timerState: EState
  time: number
  currentTomato: number
}

const MINUTES_PER_TOMATO = 1 / 4
const MINUTES_FOR_BREAK = 1 / 8
const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const WORK_TIME = MINUTES_PER_TOMATO * ONE_MINUTE
const BREAK_TIME = MINUTES_FOR_BREAK * ONE_MINUTE

const initialState: timerState = {
  timerId: null,
  timerState: EState.off,
  time: WORK_TIME,
  currentTomato: 1
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.timerState = EState.work
    },
    setTimerId: (state, action: PayloadAction<number>) => {
      state.timerId = action.payload
    },
    decriseSecond: (state) => {
      state.time = state.time - ONE_SECOND
      if (state.time <= 0) {
        if (state.timerState === EState.work) {
          state.time = BREAK_TIME
          state.timerState = EState.break
        } else {
          state.time = WORK_TIME
          state.timerState = EState.work
        }
      }
    },
    addTime: (state) => {
      state.time += ONE_MINUTE
    },
    pauseTimer: (state) => {
      if (!state.timerId) return

      clearInterval(state.timerId)

      if (state.timerState === EState.work) {
        state.timerState = EState.workPause
      } else {
        state.timerState = EState.breakPause
      }
    },
    stopTimer: (state) => {
      if (!state.timerId) return

      clearInterval(state.timerId)

      state.time = WORK_TIME
    }
  }
})

export const { setTimerId, startTimer, decriseSecond, addTime, pauseTimer, stopTimer } = timerSlice.actions
export default timerSlice.reducer
