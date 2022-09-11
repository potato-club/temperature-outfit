import React, { useCallback, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';
import { filterType } from 'api/productApi';
import { productType } from 'types/editPage/product.type';
import { infoModal } from 'utils/interactionModal';
import { ProductDetailResponse } from 'types';

export default function useGetClothesEdit() {
  const [clothesData, setClothesData] = useState<ProductDetailResponse[]>([]);

  const getClothesEdit = async (
    id: any,
  ) => {
    try {
      const { data } = await productApi.getProduct(id);
      if (
        clothesData.findIndex((clothes: any) => clothes.id === data.id) !== -1
      ) {
        infoModal('이미 등록된 옷입니다.', 'error');
        return;
      }
      setClothesData(clothesData.concat(data));
      infoModal('등록 성공!', 'success');
    } catch (err) {
      console.log(err);
    }
  };

  return {
    clothesData,
    getClothesEdit,
  };
}
