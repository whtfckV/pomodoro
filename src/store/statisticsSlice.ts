import { createSlice } from "@reduxjs/toolkit";
import { ONE_SECOND } from "./constants";

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
  focus: 4,
  pauseTime: 4,
  stops: 18
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: initialState,
  reducers: {
    addSecondWork: (state) => {
      state.workingTime += ONE_SECOND;
    }
  }
})

export const { addSecondWork } = statisticsSlice.actions;
export default statisticsSlice.reducer
