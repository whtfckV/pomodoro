import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WORK_TIME } from "./constants";

export enum EStatus {
  work = 'work',
  workPause = 'workPause',
  break = 'break',
  breakPause = 'breakPause',
  nothing = 'nothing'
}

type InitialTimerState = {
  isWorking: boolean
  isStarted: boolean
  isBreak: boolean
  // status: EStatus
  // timerId: number | null
  time: number
  currentTomato: number
}

const initialState: InitialTimerState = {
  isWorking: false,
  isStarted: false,
  isBreak: false,
  // status: EStatus.nothing,
  // timerId: null,
  time: WORK_TIME,
  currentTomato: 1,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setIsWorking: (state, action: PayloadAction<boolean>) => {
      state.isWorking = action.payload
    },
    setIsStarted: (state, action: PayloadAction<boolean>) => {
      state.isStarted = action.payload
    },
    setIsBreak: (state, action: PayloadAction<boolean>) => {
      state.isBreak = action.payload
    },
  }
})

export const {
  setIsWorking,
  setIsStarted,
  setIsBreak,
} = timerSlice.actions
export default timerSlice.reducer
