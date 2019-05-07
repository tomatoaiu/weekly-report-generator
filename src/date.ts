export function oneDigitShort(date: number): string {
  if (date < 10) {
    return `0${date}`;
  } else {
    return String(date);
  }
}

const dayOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];

export type ReportDate = {
  year: string,
  month: string,
  day: string,
  date: string
}

export function date(offset: number = 0, startMonday: boolean = true): ReportDate {
  const date = new Date();
  let monday = 0;
  if (startMonday) {
    monday = weekOffset();
  }
  date.setDate(date.getDate() + (offset + monday));
  return {
    year: String(date.getFullYear()),
    month: oneDigitShort(date.getMonth() + 1),
    day: oneDigitShort(date.getDate()),
    date: dayOfTheWeek[date.getDay()]
  }
}

function weekOffset(): number {
  const date = new Date();
  const d = date.getDay();
  switch (d) {
    case 0:
      return 1;
    case 1:
      return 0;
    case 2:
      return -1;
    case 3:
      return -2;
    case 4:
      return -3;
    case 5:
      return -4;
    case 6:
      return -5;
  }
  return -1;
}
