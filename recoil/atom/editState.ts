import { atom, useResetRecoilState } from 'recoil';
import { ProductDetailResponse } from 'types';
import { imageStateType } from 'types/editPage/imageStateType';

export const topState = atom<ProductDetailResponse[]>({
  key: 'topImages',
  default: [],
});

export const outerState = atom<ProductDetailResponse[]>({
  key: 'outerImages',
  default: [],
});

export const bottomState = atom<ProductDetailResponse[]>({
  key: 'bottomImages',
  default: [],
});

export const shoesState = atom<ProductDetailResponse[]>({
  key: 'shoesImages',
  default: [],
});

export const etcState = atom<ProductDetailResponse[]>({
  key: 'etcImages',
  default: [],
});