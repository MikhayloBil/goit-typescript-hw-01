enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

type IsWeekend = Record<DayOfWeek, boolean>;

const isWeekend: IsWeekend = {
  [DayOfWeek.Monday]: true,
  [DayOfWeek.Tuesday]: true,
  [DayOfWeek.Wednesday]: true,
  [DayOfWeek.Thursday]: true,
  [DayOfWeek.Friday]: true,
  [DayOfWeek.Saturday]: false,
  [DayOfWeek.Sunday]: false,
};
console.log(isWeekend);

export {};
