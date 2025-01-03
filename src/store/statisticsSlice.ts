import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nextTomato, stopTimer } from "./timerSlice";
import moment from "moment";
import { filterDates } from "src/utils/ts/filterDateWeeks";

type Fields = "allTime" | "pauseTime" | "workTime" | "totalTomatoes" | "stops";
export type StatisticData = Record<Fields, number> & { date: string };
interface IInitialStatisticsState {
  dates: StatisticData[];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  error: string | null;
}
const MOCK: StatisticData[] = [
  {
    date: "12.28.2024",
    allTime: 0,
    pauseTime: 0,
    workTime: 1000000,
    totalTomatoes: 0,
    stops: 0,
  },
  {
    date: "12.30.2024",
    allTime: 2500000,
    pauseTime: 4000000,
    workTime: 500000,
    totalTomatoes: 5,
    stops: 1,
  },
  {
    date: "12.31.2024",
    allTime: 0,
    pauseTime: 0,
    workTime: 0,
    totalTomatoes: 0,
    stops: 0,
  },
  {
    date: "01.01.2025",
    allTime: 2000000,
    pauseTime: 0,
    workTime: 1500000,
    totalTomatoes: 0,
    stops: 0,
  },
];

type Time = {
  total: number;
  pause: number;
  work: number;
};

const initialState: IInitialStatisticsState = {
  dates: MOCK,
  status: "idle",
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState,
  reducers: {
    addTime: (state, action: PayloadAction<Time>) => {
      const date = moment().format();
      const existingDate = state.dates.find(
        (item) => moment(item.date).format("L") === moment(date).format("L")
      );

      if (existingDate) {
        existingDate.allTime += action.payload.total;
        existingDate.pauseTime += action.payload.pause;
        existingDate.workTime += action.payload.work;
      } else {
        state.dates.push({
          date,
          allTime: action.payload.total,
          pauseTime: action.payload.pause,
          workTime: action.payload.work,
          totalTomatoes: 0,
          stops: 0,
        });
      }
      state.dates = filterDates<StatisticData>(state.dates, 3);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(nextTomato, (state) => {
        const date = moment().format();
        const existingDate = state.dates.find(
          (item) => moment(item.date).format("L") === moment(date).format("L")
        );

        if (existingDate) {
          existingDate.totalTomatoes++;
        } else {
          state.dates.push({
            date,
            allTime: 0,
            pauseTime: 0,
            workTime: 0,
            totalTomatoes: 1,
            stops: 0,
          });
        }
        state.dates = filterDates<StatisticData>(state.dates, 3);
      })
      .addCase(stopTimer, (state) => {
        const date = moment().format();
        const existingDate = state.dates.find(
          (item) => moment(item.date).format("L") === moment(date).format("L")
        );

        if (existingDate) {
          existingDate.stops++;
        } else {
          state.dates.push({
            date,
            allTime: 0,
            pauseTime: 0,
            workTime: 0,
            totalTomatoes: 0,
            stops: 1,
          });
        }
        state.dates = filterDates<StatisticData>(state.dates, 3);
      });
  },
});

export const {
  addTime,
  // addTomatoes,
} = statisticsSlice.actions;
export default statisticsSlice.reducer;
