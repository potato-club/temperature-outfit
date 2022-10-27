import { UseFormRegisterReturn } from 'react-hook-form';
import { atom } from 'recoil';

export const chooseModal = atom({
  key: 'chooseModalKey',
  default: false,
});

export const categoryLabel = atom({
  key: 'CategoryLabel',
  default: '',
});

export const modalRegister = atom<UseFormRegisterReturn<string>>({
  key: 'modalRegister',
  default: undefined,
})