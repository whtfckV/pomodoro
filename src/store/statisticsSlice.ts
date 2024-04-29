import { createSlice } from "@reduxjs/toolkit";

interface IInitialStatisticsState {
  workingTime: number,
  totalTomatoes: number,
  focus: number,
  pauseTime: number,
  stops: number
}

const initialState: IInitialStatisticsState = {
  workingTime: 4,
  totalTomatoes: 2,
  focus: 4,
  pauseTime: 4,
  stops: 18
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: initialState,
  reducers: {

  }
})

export default statisticsSlice.reducer
