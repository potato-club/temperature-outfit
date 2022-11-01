export const today: Date = new Date();
export const totalToday: string = today.toISOString().replace(/T.*$/, '');

const offset = today.getTimezoneOffset() * 60000;
export const koreaToday = new Date(today.getTime() - offset)
  .toISOString()
  .replace(/T.*$/, '');