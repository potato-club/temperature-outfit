import { atom } from 'recoil';

export const chooseModal = atom({
  key: 'chooseModalKey',
  default: false,
});

export const modalCategory = atom({
  key: 'modalCategory',
  default: '',
})