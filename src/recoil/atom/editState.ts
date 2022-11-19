import { atom } from 'recoil';
// import { ProductDetailResponse } from 'types';

// Todo : 백엔드에서 타입 만들어주면 ProductType 삭제하고 그거 import 해서 사용

export type ProductType = {
  id: string;
  name: string;
  categoryId: string;
  color: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export const topState = atom<ProductType[]>({
  key: 'topImages',
  default: [],
});

export const outerState = atom<ProductType[]>({
  key: 'outerImages',
  default: [],
});

export const bottomState = atom<ProductType[]>({
  key: 'bottomImages',
  default: [],
});

export const shoesState = atom<ProductType[]>({
  key: 'shoesImages',
  default: [],
});

export const etcState = atom<ProductType[]>({
  key: 'etcImages',
  default: [],
});

export const codyThumbnail = atom<string>({
  key: 'codyThumbnail',
  default: undefined,
});
