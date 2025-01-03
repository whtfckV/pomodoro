import moment from "moment";

export const filterDates = <T extends { date: string }>(dates: T[], weeksAgo: number): T[] => {
  // Оставляем только последние три недели
  const WeeksAgo = moment().subtract(weeksAgo, "weeks");
  return dates.filter((item) =>
    moment(item.date).isSameOrAfter(WeeksAgo, "day")
  );
};
