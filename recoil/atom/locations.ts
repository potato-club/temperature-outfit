import { atom } from 'recoil';

export const locations = atom({
  key: 'locationsKey',
  default: [{ id: 1, name: '서울' }],
});
