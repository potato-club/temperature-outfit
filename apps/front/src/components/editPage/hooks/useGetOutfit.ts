import { CategoryResponse, ProductOneResponse } from '@temperature-outfit/core';
import { todayCodyApi } from 'api';
import { clothesSubCategory } from 'constants/index';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import {
  bottomState,
  codyThumbnail,
  etcState,
  outerState,
  shoesState,
  topState,
} from 'recoil/atom';
import { errorModal } from 'utils';

type Props = {
  setValue: UseFormSetValue<FieldValues>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
};
export const useGetOutfit = ({ setValue, setDay }: any) => {
  const setTopImages = useSetRecoilState(topState);
  const setOuterImages = useSetRecoilState(outerState);
  const setBottomImages = useSetRecoilState(bottomState);
  const setShoesImages = useSetRecoilState(shoesState);
  const setEtcImages = useSetRecoilState(etcState);
  const setCodyThumbnail = useSetRecoilState(codyThumbnail);
  const router = useRouter();

  const filterProducts = useCallback(
    (products: ProductOneResponse[]) => {
      const filterSubCategory = (
        category: string,
        categoryId: string,
      ): boolean => {
        return clothesSubCategory[category]
          .map((item: CategoryResponse) => item.id)
          .includes(categoryId);
      };

      products.forEach((product) => {
        if (filterSubCategory('top', product.categoryId)) {
          setTopImages((prev) => [...prev, product]);
        } else if (filterSubCategory('outer', product.categoryId)) {
          setOuterImages((prev) => [...prev, product]);
        } else if (filterSubCategory('bottom', product.categoryId)) {
          setBottomImages((prev) => [...prev, product]);
        } else if (filterSubCategory('shoes', product.categoryId)) {
          setShoesImages((prev) => [...prev, product]);
        } else if (filterSubCategory('mainETC', product.categoryId)) {
          setEtcImages((prev) => [...prev, product]);
        }
      });
    },
    [
      setTopImages,
      setOuterImages,
      setBottomImages,
      setShoesImages,
      setEtcImages,
    ],
  );
  return useQuery(
    'getOutfit',
    () => todayCodyApi.getOutfit(router.query.outfitId as string),
    {
      enabled: !!router.query.outfitId,
      onSuccess: ({ data }) => {
        const { date, imageUrl, rating, products, comment } = data;
        setCodyThumbnail(imageUrl);
        setValue('rating', rating);
        setValue('comment', comment);
        filterProducts(products);
        setDay(new Date(date).toISOString().replace(/T.*$/, ''));
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );
};
