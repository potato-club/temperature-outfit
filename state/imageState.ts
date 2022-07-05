import { atom, useResetRecoilState } from 'recoil';
import { imageStateType } from 'types/editPage/imageStateType';

export const topState = atom<imageStateType[]>({
  key: 'topImages',
  default: [],
});

export const outerState = atom<imageStateType[]>({
  key: 'outerImages',
  default: [],
});

export const bottomState = atom<imageStateType[]>({
  key: 'bottomImages',
  default: [],
});

export const shoesState = atom<imageStateType[]>({
  key: 'shoesImages',
  default: [],
});

export const etcState = atom<imageStateType[]>({
  key: 'etcImages',
  default: [],
});
