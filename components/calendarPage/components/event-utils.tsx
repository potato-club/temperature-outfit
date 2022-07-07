import { EventInput } from '@fullcalendar/react';
import { v4 as uuidv4 } from 'uuid';

// YYYY-MM-DD of today
// ex) 2022-07-07
let todayStr = new Date().toISOString().replace(/T.*$/, '');

// title을 그날의 온도로 할까?
export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: '그날의 코디임',
    start: todayStr, // 그냥 그 날을 얘기한다.
  },
];

export function createEventId() {
  return uuidv4();
}
