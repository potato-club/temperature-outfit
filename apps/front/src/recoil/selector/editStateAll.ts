import { selector } from 'recoil';
import {
  topState,
  outerState,
  bottomState,
  shoesState,
  etcState,
} from '../atom/editState';

export const editStateAll = selector({
  key: 'editStateAll',
  get: ({ get }) => {
    const top = get(topState);
    const outer = get(outerState);
    const bottom = get(bottomState);
    const shoes = get(shoesState);
    const etc = get(etcState);

    return [
      ...top,
      ...outer,
      ...bottom,
      ...shoes,
      ...etc,
    ]
      .map(({ id }) => id)
      .join();
  },
});
