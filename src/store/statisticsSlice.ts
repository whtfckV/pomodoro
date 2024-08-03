import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialStatisticsState {
  workingTime: number,
  totalTomatoes: number,
  focus: number,
  pauseTime: number,
  stops: number
}

const initialState: IInitialStatisticsState = {
  workingTime: 0,
  totalTomatoes: 0,
  focus: 0,
  pauseTime: 0,
  stops: 0
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: initialState,
  reducers: {
    addWorkingTime: (state, action: PayloadAction<number>) => {
      state.workingTime += action.payload;
    },
    addTomatoes: (state, action: PayloadAction<number>) => {
      state.totalTomatoes += action.payload;
    },
    addOneStop: (state) => {
      state.stops += 1
    }
  }
})

export const { addWorkingTime, addTomatoes, addOneStop } = statisticsSlice.actions;
export default statisticsSlice.reducer
