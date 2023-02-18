import { atom } from 'recoil';

export const nameFilter = atom<string>({
  key: 'nameFilter',
  default: '',
});

export const categoryFilter = atom<string>({
  key: 'categoryFilter',
  default: 'all',
});

export const colorFilter = atom<string>({
  key: 'colorFilter',
  default: '',
});

export const pageFilter = atom<number>({
  key: 'pageFilter',
  default: 1,
});

export const lastPage = atom<number>({
  key: 'lastPage',
  default: 0,
})

// * 20개보기, 40개씩보기 를 만들게되면 필요해질 값
// export const limitFilter = atom<number>({
//   key: 'limitFilter',
//   default: '',
// });

// * 이렇게 한번에 필터하게되면 셀렉트박스 필터할때 color 쪽도 리렌더링이 같이됨 -> React Dev tools 로 확인했음.
// export const filtering = atom<FindAllProductQuery>({
//   key: 'filter',
//   default: {
//     query: '',
//     categoryId: 'all',
//     color: '',
//     limit: 20,
//     page: 1,
//   },
// });
