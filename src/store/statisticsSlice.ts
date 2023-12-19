import { createSlice } from "@reduxjs/toolkit";

interface IInitialStatisticsState {
  workingTime: number,
  totalTomatoes: number,
  focus: number,
  pauseTime: number,
  stops: number
}

const initialState: IInitialStatisticsState = {
  workingTime: 0,
  totalTomatoes: 2,
  focus: 0,
  pauseTime: 0,
  stops: 0
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: initialState,
  reducers: {

  }
})

export default statisticsSlice.reducer
