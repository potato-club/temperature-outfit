import React, { useCallback, useEffect, useState } from 'react';
import { productType } from 'types/editPage/product.type';
import { filterType } from 'types/editPage/filter.type';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { lastPage } from 'recoil/atom/filtering';
import {
  bottomState,
  etcState,
  outerState,
  shoesState,
  topState,
} from 'recoil/atom';

export default function useGetAllEditProductsId() {
  const [productsId, setProductsId] = useState<string>('');
  const topImages = useRecoilValue(topState);
  const outerImages = useRecoilValue(outerState);
  const bottomImages = useRecoilValue(bottomState);
  const shoesImages = useRecoilValue(shoesState);
  const etcImages = useRecoilValue(etcState);

  const getAllEditProductsId = () => {
    let productsIdString = '';
    topImages.forEach((data) => (productsIdString += data.id + ','));
    outerImages.forEach((data) => (productsIdString += data.id + ','));
    bottomImages.forEach((data) => (productsIdString += data.id + ','));
    shoesImages.forEach((data) => (productsIdString += data.id + ','));
    etcImages.forEach((data) => (productsIdString += data.id + ','));
    productsIdString = productsIdString.slice(0, -1); // 반점 제거
    setProductsId(productsIdString);
  };
  
  return {
    productsId,
    getAllEditProductsId,
  };
}
