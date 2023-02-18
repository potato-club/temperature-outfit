import { LocationResponse } from '@temperature-outfit/core';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const locations = atom<LocationResponse[]>({
  key: 'locationsKey',
  default: [{ id: 1, name: '서울' }],
  effects_UNSTABLE: [persistAtom],
});
