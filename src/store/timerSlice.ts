import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BREAK_TIME, LONG_BREAK_TIME, ONE_MINUTE, ONE_SECOND, WORK_TIME } from "./constants";

export enum EStatus {
  work = 'work',
  workPause = 'workPause',
  break = 'break',
  breakPause = 'breakPause',
  nothing = 'nothing'
}

type InitialTimerState = {
  started: boolean
  status: EStatus
  timerId: number | null
  time: number
  currentTomato: number
}

const initialState: InitialTimerState = {
  started: false,
  status: EStatus.nothing,
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
      if ([EStatus.nothing, EStatus.workPause].includes(state.status)) {
        state.status = EStatus.work
      } else {
        state.status = EStatus.break
      }
    },
    setTimerId: (state, action: PayloadAction<number>) => {
      state.timerId = action.payload
    },
    decriseSecond: (state) => {
      // пауза ставится в любом случае даже если у задачи был один помидор
      // заметил это в redux devtools
      state.time = state.time - ONE_SECOND
      if (state.time <= 0) {
        if (state.status === EStatus.work) {
          state.currentTomato++
          state.time = state.currentTomato === 5 ? LONG_BREAK_TIME : BREAK_TIME
          state.status = EStatus.break
        } else {
          state.time = WORK_TIME
          state.status = EStatus.nothing
          clearInterval(state.timerId!)
        }
      }
    },
    addTime: (state) => {
      state.time += ONE_MINUTE
    },
    pauseTimer: (state) => {
      clearInterval(state.timerId!)

      if (state.status === EStatus.work) {
        state.status = EStatus.workPause
      } else {
        state.status = EStatus.breakPause
      }
    },
    stopTimer: (state) => {
      clearInterval(state.timerId!)

      state.started = false
      state.status = EStatus.nothing
      state.time = WORK_TIME
    },
    skipPause: (state) => {
      state.time = WORK_TIME
      state.status = EStatus.nothing
      clearInterval(state.timerId!)
    },
    resetTimer: (state) => {
      clearInterval(state.timerId!)
      state.timerId = null;
      state.started = false
      state.status = EStatus.nothing
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
