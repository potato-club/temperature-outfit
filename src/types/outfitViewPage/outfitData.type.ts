import { ProductType } from 'recoil/atom/editState';

export type outfitDataType = {
  date: string;
  imageUrl: string;
  rating: number;
  products: ProductType[];
  comment: string;
};
