export const today: Date = new Date();

export const koreaToday: string = today
  .toLocaleDateString('ko')
  .split('. ')
  .map((data) => {
    return data.padStart(2, '0');
  })
  .join('-')
  .slice(0, -1);
