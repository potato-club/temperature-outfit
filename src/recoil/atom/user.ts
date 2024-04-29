import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
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
  effects_UNSTABLE: [persistAtom],
});
