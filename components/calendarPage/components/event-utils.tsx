import { EventInput } from '@fullcalendar/react';

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

// 여기서 내가 갖고 있는 정보들 받아오기
// 날짜
// title을 그날의 온도로 할까?
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    // 달력에 표시될 text
    start: todayStr,
    // 그냥 그날을 얘기한다.
  },
];

export function createEventId() {
  return String(eventGuid++);
}
