import { atom } from 'recoil';
import { ProductOneResponse } from '@temperature-outfit/core';

export const topState = atom<ProductOneResponse[]>({
  key: 'topImages',
  default: [],
});

export const outerState = atom<ProductOneResponse[]>({
  key: 'outerImages',
  default: [],
});

export const bottomState = atom<ProductOneResponse[]>({
  key: 'bottomImages',
  default: [],
});

export const shoesState = atom<ProductOneResponse[]>({
  key: 'shoesImages',
  default: [],
});

export const etcState = atom<ProductOneResponse[]>({
  key: 'etcImages',
  default: [],
});

export const codyThumbnail = atom<string>({
  key: 'codyThumbnail',
  default: undefined,
});
