import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { locationType } from 'types/common';

const { persistAtom } = recoilPersist();

export const locations = atom<locationType[]>({
  key: 'locationsKey',
  default: [{ id: 1, name: '서울' }],
  effects_UNSTABLE: [persistAtom],
});
