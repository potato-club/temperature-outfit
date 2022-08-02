import { atom, useResetRecoilState } from 'recoil';
import { ProductResponse } from 'types';
import { imageStateType } from 'types/editPage/imageStateType';

export const topState = atom<ProductResponse[]>({
  key: 'topImages',
  default: [],
});

export const outerState = atom<ProductResponse[]>({
  key: 'outerImages',
  default: [],
});

export const bottomState = atom<ProductResponse[]>({
  key: 'bottomImages',
  default: [],
});

export const shoesState = atom<ProductResponse[]>({
  key: 'shoesImages',
  default: [],
});

export const etcState = atom<ProductResponse[]>({
  key: 'etcImages',
  default: [],
});

export const reviewImageState = atom({
  key: 'codyImage',
  default: '/reviewDummy/review1.jpg',
});