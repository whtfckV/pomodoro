import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EProgress {
  work = 'work',
  workPause = 'workPause',
  break = 'break',
  breakPause = 'breakPause'
}

type wokrs = 'on' | 'off'

interface progress {
  works: wokrs
  progress: EProgress | null
  timerId: number | null
  time: number
  currentTomato: number
  totalTomatoes: number
}

const MINUTES_PER_TOMATO = 1 / 4
const MINUTES_FOR_BREAK = 1 / 8
const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const WORK_TIME = MINUTES_PER_TOMATO * ONE_MINUTE
const BREAK_TIME = MINUTES_FOR_BREAK * ONE_MINUTE

const initialState: progress = {
  works: 'off',
  progress: null,
  timerId: null,
  time: WORK_TIME,
  currentTomato: 1,
  totalTomatoes: 0
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.works = 'on'
      if (!state.progress || state.progress === EProgress.workPause) {
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
          state.time = BREAK_TIME
          state.progress = EProgress.break
        } else {
          state.time = WORK_TIME
          state.progress = EProgress.work
        }
      }
    },
    addTime: (state) => {
      state.time += ONE_MINUTE
    },
    pauseTimer: (state) => {
      if (!state.timerId) return

      clearInterval(state.timerId)

      state.works = 'off'
      if (state.progress === EProgress.work) {
        state.progress = EProgress.workPause
      } else {
        state.progress = EProgress.breakPause
      }
    },
    stopTimer: (state) => {
      if (!state.timerId) return

      clearInterval(state.timerId)

      state.works = 'off'
      state.progress = null
      state.time = WORK_TIME
    }
  }
})

export const { setTimerId, startTimer, decriseSecond, addTime, pauseTimer, stopTimer } = timerSlice.actions
export default timerSlice.reducer
