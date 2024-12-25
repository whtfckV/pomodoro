import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EStatus {
  work = 'work',
  workPause = 'workPause',
  break = 'break',
  breakPause = 'breakPause',
  nothing = 'nothing'
}

type InitialTimerState = {
  isPause: boolean
  isStarted: boolean
  isBreak: boolean
  currentTomato: number
}

const initialState: InitialTimerState = {
  isPause: false,
  isStarted: false,
  isBreak: false,
  currentTomato: 1,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state) => {
      state.isStarted = true;
      // state.isPause = false
    },
    pause: (state) => {
      state.isPause = true
    },
    contin: (state) => {
      state.isPause = false
    },
    startBreak: (state) => {
      state.isPause = true
      state.isBreak = true
    },
    // setIsWorking: (state, action: PayloadAction<boolean>) => {
    //   state.isWorking = action.payload
    // },
    // setIsStarted: (state, action: PayloadAction<boolean>) => {
    //   state.isStarted = action.payload
    //   state.isWorking = action.payload
    // },
    setIsBreak: (state, action: PayloadAction<boolean>) => {
      state.isBreak = action.payload
    },
    increaseCurrentTomato: (state) => {
      state.currentTomato++
    },
    resetTimer: (state) => {
      state.isStarted = false
      state.isPause = false
      state.isBreak = false
      state.currentTomato = 1
    }
  },
  // extraReducers: builder => {
  //   builder.addCase(stat)
  // }
})

export const {
  start,
  pause,
  contin,
  startBreak,
  // setIsWorking,
  // setIsStarted,
  setIsBreak,
  increaseCurrentTomato,
  resetTimer
} = timerSlice.actions
export default timerSlice.reducer
