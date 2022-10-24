import { atom } from 'recoil';
interface userStateTypes {
  name: string;
  locationId: number;
}

export const userState = atom<userStateTypes>({
  key: 'user',
  default: {
    name: '유저 이름',
    locationId: 1,
  },
});
