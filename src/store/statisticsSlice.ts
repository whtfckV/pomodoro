import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nextTomato, stopTimer } from "./timerSlice";
import moment from "moment";
import { filterDates } from "src/utils/ts/filterDateWeeks";

type Fields = "allTime" | "pauseTime" | "workTime" | "totalTomatoes" | "stops";
type StatisticData = Record<Fields, number> & { date: string };
interface IInitialStatisticsState {
  dates: StatisticData[];
}
const MOCK: StatisticData[] = [
  {
    date: "01.01.2023",
    allTime: 0,
    pauseTime: 0,
    workTime: 0,
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
      state.dates = filterDates<StatisticData>(state.dates);
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
        state.dates = filterDates<StatisticData>(state.dates);
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
        state.dates = filterDates<StatisticData>(state.dates);
      });
  },
});

export const {
  addTime,
  // addTomatoes,
} = statisticsSlice.actions;
export default statisticsSlice.reducer;
