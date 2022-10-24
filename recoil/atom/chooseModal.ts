import { atom } from 'recoil';

export const chooseModal = atom({
  key: 'chooseModalKey',
  default: false,
});

export const categoryLabel = atom({
  key: 'CategoryLabel',
  default: '',
});