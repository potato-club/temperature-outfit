import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type locationsTypes = {
  id: number;
  name: string;
};

export const locations = atom<locationsTypes[]>({
  key: 'locationsKey',
  default: [{ id: 1, name: '서울' }],
  effects_UNSTABLE: [persistAtom],
});
