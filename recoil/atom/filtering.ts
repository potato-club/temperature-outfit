import { atom } from 'recoil';
import { filterType } from 'types/editPage/filter.type';

export const filtering = atom<filterType>({
  key: 'filter',
  default: {
    query: '',
    categoryId: 'all',
    color: '',
    limit: 20,
    page: 1,
  },
});
