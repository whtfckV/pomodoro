import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nextTomato, stopTimer } from "./timerSlice";
// import { WORK_TIME } from "./constants";

// TODO
// СДЕЛАТЬ СБОР СТАТИСТИКИ ПО ПОМИДОРУ С ДАТОЙ
// ВРЕМЕНИ РАБОТЫ И ПАУЗ АНАЛОГИЧКО

type fields = "allTime" | "pauseTime" | "totalTomatoes" | "focus" | "stops";
type statisticData = Record<fields, number> & { date: string };
interface IInitialStatisticsState {
  dates: statisticData[];
}

type Time = {
  total: number;
  pause: number;
};

const initialState: IInitialStatisticsState = {
  dates: [],
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState,
  reducers: {
    addTime: (state, action: PayloadAction<Time>) => {
      const date = new Date().toLocaleDateString();
      const existingDate = state.dates.find((item) => item.date === date);

      if (existingDate) {
        existingDate.allTime += action.payload.total;
        existingDate.pauseTime += action.payload.pause;
      } else {
        state.dates.push({
          date,
          allTime: action.payload.total,
          pauseTime: action.payload.pause,
          totalTomatoes: 0,
          focus: 0,
          stops: 0,
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(nextTomato, (state) => {
        const date = new Date().toLocaleDateString();
        const existingDate = state.dates.find((time) => time.date === date);

        if (existingDate) {
          existingDate.totalTomatoes++;
        } else {
          state.dates.push({
            date,
            allTime: 0,
            pauseTime: 0,
            totalTomatoes: 1,
            focus: 0,
            stops: 0,
          });
        }
      })
      .addCase(stopTimer, (state) => {
        const date = new Date().toLocaleDateString();
        const existingDate = state.dates.find((time) => time.date === date);

        if (existingDate) {
          existingDate.stops++;
        } else {
          state.dates.push({
            date,
            allTime: 0,
            pauseTime: 0,
            totalTomatoes: 0,
            focus: 0,
            stops: 1,
          });
        }
      });
  },
});

export const {
  addTime,
  // addTomatoes,
} = statisticsSlice.actions;
export default statisticsSlice.reducer;
