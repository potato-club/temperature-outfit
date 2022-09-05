import { atom } from 'recoil';

export const userState = atom({
  key: 'user',
  default: {
    name: '유저 이름',
    locationId: 1,
  },
});
