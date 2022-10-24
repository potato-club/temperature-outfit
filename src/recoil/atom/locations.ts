import { atom } from 'recoil';
interface locationsTypes {
  id: number;
  name: string;
}

export const locations = atom<locationsTypes[]>({
  key: 'locationsKey',
  default: [{ id: 1, name: '서울' }],
});
