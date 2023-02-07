export const today: Date = new Date();

export const koreaToday = today
  .toLocaleDateString('ko')
  .split('.')
  .map((data) => {
    return data.trim();
  })
  .slice(0, -1)
  .map((data) => data.padStart(2, '0'))
  .join('-');
