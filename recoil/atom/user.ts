import { atom } from 'recoil';

export const userState = atom({
  key: 'user',
  default: {
    name: '유저 이름',
    city: 'seoul',
    // 아니면 id로 가질까
  },
});
