export const today: Date = new Date();

export const koreaToday: string = today
  .toLocaleDateString('ko')
  .replaceAll('.', '-')
  .replaceAll(' ', '')
  .slice(0, -1);
