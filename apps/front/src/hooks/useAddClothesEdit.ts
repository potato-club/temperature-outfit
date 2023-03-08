import { productApi } from '../api/productApi';
import { RecoilState, useRecoilState } from 'recoil';
import { errorModal, infoModal } from 'utils/interactionModal';
import { useQuery } from 'react-query';
import { ProductOneResponse } from '@temperature-outfit/core';

export function useAddClothesEdit(
  recoil: RecoilState<ProductOneResponse[]>,
  id: string,
) {
  const [clothesData, setClothesData] = useRecoilState(recoil);

  // const addClothesEdit = async (id: any) => {
  //   try {
  //     const { data } = await productApi.getProduct(id);
  //     if (
  //       clothesData.findIndex((clothes: any) => clothes.id === data.id) !== -1
  //     ) {
  //       infoModal('이미 등록된 옷입니다.', 'error');
  //       return;
  //     }
  //     setClothesData(clothesData.concat(data));
  //     infoModal('등록 성공!', 'success');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const { refetch } = useQuery(
    ['addClothesEdit', id],
    () => productApi.getProduct(id),
    {
      enabled: false,
      onSuccess: ({ data }) => {
        if (
          clothesData.findIndex((clothes: ProductOneResponse) => clothes.id === data.id) !== -1
        ) {
          infoModal('이미 등록된 옷입니다.', 'error');
          return;
        }
        setClothesData(clothesData.concat(data));
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );

  return {
    clothesData,
    addClothesEdit: refetch,
  };
}
