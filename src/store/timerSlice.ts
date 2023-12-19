import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EProgress {
  work = 'work',
  workPause = 'workPause',
  break = 'break',
  breakPause = 'breakPause',
  nothing = 'nothing'
}

interface IInitialTimerState {
  started: boolean
  progress: EProgress
  timerId: number | null
  time: number
  currentTomato: number
}

const MINUTES_PER_TOMATO = 1 / 4 // 25 минут
const MINUTES_FOR_BREAK = 1 / 8 // 5 минут
const MINUTES_FOR_LONG_BREAK = 1 / 6 // 15 минут
const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const WORK_TIME = MINUTES_PER_TOMATO * ONE_MINUTE
const BREAK_TIME = MINUTES_FOR_BREAK * ONE_MINUTE
const LONG_BREAK_TIME = MINUTES_FOR_LONG_BREAK * ONE_MINUTE

const initialState: IInitialTimerState = {
  started: false,
  progress: EProgress.nothing,
  timerId: null,
  time: WORK_TIME,
  currentTomato: 1,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.started = true
      if ([EProgress.nothing, EProgress.workPause].includes(state.progress)) {
        state.progress = EProgress.work
      } else {
        state.progress = EProgress.break
      }
    },
    setTimerId: (state, action: PayloadAction<number>) => {
      state.timerId = action.payload
    },
    decriseSecond: (state) => {
      state.time = state.time - ONE_SECOND
      if (state.time <= 0) {
        if (state.progress === EProgress.work) {
          state.currentTomato++
          state.time = state.currentTomato === 5 ? LONG_BREAK_TIME : BREAK_TIME
          state.progress = EProgress.break
        } else {
          state.time = WORK_TIME
          state.progress = EProgress.nothing
          clearInterval(state.timerId!)
        }
      }
    },
    addTime: (state) => {
      state.time += ONE_MINUTE
    },
    pauseTimer: (state) => {
      clearInterval(state.timerId!)

      if (state.progress === EProgress.work) {
        state.progress = EProgress.workPause
      } else {
        state.progress = EProgress.breakPause
      }
    },
    stopTimer: (state) => {
      clearInterval(state.timerId!)

      state.started = false
      state.progress = EProgress.nothing
      state.time = WORK_TIME
    },
    skipPause: (state) => {
      state.time = WORK_TIME
      state.progress = EProgress.nothing
      clearInterval(state.timerId!)
    },
    resetTimer: (state) => {
      clearInterval(state.timerId!)
      state.started = false
      state.progress = EProgress.nothing
      state.time = WORK_TIME
      state.currentTomato = 1
    }
  }
})

export const {
  setTimerId,
  startTimer,
  decriseSecond,
  addTime,
  pauseTimer,
  stopTimer,
  skipPause,
  resetTimer
} = timerSlice.actions
export default timerSlice.reducer
