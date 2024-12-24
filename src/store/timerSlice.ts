import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  currentTomato: number
}

const initialState: InitialTimerState = {
  isWorking: false,
  isStarted: false,
  isBreak: false,
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
      state.isWorking = action.payload
    },
    setIsBreak: (state, action: PayloadAction<boolean>) => {
      state.isBreak = action.payload
    },
    increaseCurrentTomato: (state) => {
      state.currentTomato++
    },
    resetTimer: (state) => {
      state.isStarted = false
      state.isWorking = false
      state.isBreak = false
      state.currentTomato = 1
    }
  },
  // extraReducers: builder => {
  //   builder.addCase(stat)
  // }
})

export const {
  setIsWorking,
  setIsStarted,
  setIsBreak,
  increaseCurrentTomato,
  resetTimer
} = timerSlice.actions
export default timerSlice.reducer
