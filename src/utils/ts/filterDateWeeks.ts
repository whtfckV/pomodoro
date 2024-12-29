import moment from "moment";

export const filterDates = <T extends { date: string }>(dates: T[]): T[] => {
  // Оставляем только последние три недели
  const threeWeeksAgo = moment().subtract(3, "weeks");
  return dates.filter((item) =>
    moment(item.date).isSameOrAfter(threeWeeksAgo, "day")
  );
};
