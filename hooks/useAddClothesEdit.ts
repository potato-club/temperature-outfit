import React, { useCallback, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';
import { infoModal } from 'utils/interactionModal';
import { ProductDetailResponse } from 'types';
import { RecoilState, useRecoilState } from 'recoil';

export default function useAddClothesEdit(recoil: RecoilState<ProductDetailResponse[]>) {
  const [clothesData, setClothesData] = useRecoilState(recoil);

  const addClothesEdit = async (id: any) => {
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
    addClothesEdit,
  };
}
