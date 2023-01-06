import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  topState,
  bottomState,
  etcState,
  outerState,
  shoesState,
  userState,
} from 'recoil/atom';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { clothesSubCategory } from 'constants/index';
import { FieldValues, useForm } from 'react-hook-form';
import { codyThumbnail } from 'recoil/atom/editState';
import { todayCodyApi, weatherApi } from 'api';
import { MemoTitle } from './components/Title';
import { MemoContents } from './components/Contents';
import {
  completeCheckModal,
  errorModal,
  infoModal,
} from 'utils/interactionModal';
import useEditResetRecoil from 'hooks/useEditResetRecoil';
import { useMutation, useQuery } from 'react-query';
import { mutateParamType } from 'types/editPage/mutateParam.type';
import { debounceFunction } from 'utils/debounceFunction';

export default function EditPage() {
  const router = useRouter();
  const [submitTimer, setSubmitTimer] = useState<NodeJS.Timer>();
  const [day, setDay] = useState('');

  const { mutate } = useMutation(
    ({ frm, outfitId }: mutateParamType) =>
      outfitId
        ? todayCodyApi.putOutfit(outfitId, frm)
        : todayCodyApi.addProduct(frm),
    {
      onSuccess: () => {
        completeCheckModal(() => router.push('/calendar'));
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );

  const submit = async (data: FieldValues) => {
    debounceFunction({
      timer: submitTimer,
      setTimer: setSubmitTimer,
      fn: async () => {
        const productsId = getAllEditProductsId();
        // 등록된옷이 하나도 없을때
        if (!productsId) {
          infoModal('옷을 하나 이상 등록 해주세요', 'error');
          // errorModal('확인해주세요!', '옷을 하나 이상 등록 해주세요!')
          return;
        }
        const frm = formDataAppend(data, productsId);
        // 수정일때
        if (router.query.outfitId as string) {
          const outfitId = router.query.outfitId as string;
          mutate({ frm, outfitId });
          // 등록일때
        } else {
          await getWeather();
          frm.append('locationId', user.locationId.toString());
          mutate({ frm });
        }
      },
    });
  };

  const [topImages, setTopImages] = useRecoilState(topState);
  const [outerImages, setOuterImages] = useRecoilState(outerState);
  const [bottomImages, setBottomImages] = useRecoilState(bottomState);
  const [shoesImages, setShoesImages] = useRecoilState(shoesState);
  const [etcImages, setEtcImages] = useRecoilState(etcState);
  const { resetRecoilState } = useEditResetRecoil();
  const setCodyThumbnail = useSetRecoilState(codyThumbnail);
  const user = useRecoilValue(userState);

  const getWeather = useCallback(async () => {
    if (!day) return;
    try {
      await weatherApi.getWeather(day, user.locationId);
    } catch (error) {
      console.log(error);
    }
  }, [day, user.locationId]);

  const getAllEditProductsId = useCallback(() => {
    let productsIdString = '';
    topImages.forEach((data) => (productsIdString += data.id + ','));
    outerImages.forEach((data) => (productsIdString += data.id + ','));
    bottomImages.forEach((data) => (productsIdString += data.id + ','));
    shoesImages.forEach((data) => (productsIdString += data.id + ','));
    etcImages.forEach((data) => (productsIdString += data.id + ','));
    productsIdString = productsIdString.slice(0, -1); // 반점 제거
    return productsIdString;
  }, [topImages, outerImages, bottomImages, shoesImages, etcImages]);

  const filterProduct = useCallback(
    (product: any): void => {
      if (filterSubCategory('top', product.categoryId)) {
        setTopImages((prev) => [...prev, product]);
      }
      if (filterSubCategory('outer', product.categoryId)) {
        setOuterImages((prev) => [...prev, product]);
      }
      if (filterSubCategory('bottom', product.categoryId)) {
        setBottomImages((prev) => [...prev, product]);
      }
      if (filterSubCategory('shoes', product.categoryId)) {
        setShoesImages((prev) => [...prev, product]);
      }
      if (filterSubCategory('mainETC', product.categoryId)) {
        setEtcImages((prev) => [...prev, product]);
      }
    },
    [
      setTopImages,
      setOuterImages,
      setBottomImages,
      setShoesImages,
      setEtcImages,
    ],
  );

  const filterSubCategory = (category: string, categoryId: string): boolean => {
    return clothesSubCategory[category]
      .map((item: any) => item.id)
      .includes(categoryId);
  };

  const formDataAppend = (data: FieldValues, productsId: string) => {
    const frm = new FormData();
    frm.append('date', `${day}`);

    // * data.image null 일때 삭제
    // * data.image undefined 일때 기존
    // * data.image 값 있으면 새로 추가
    if (data.image) {
      frm.append('image', data.image[0]);
    } else {
      frm.append('image', data.image);
    }

    frm.append('productsId', productsId);
    frm.append('comment', data.comment);
    frm.append('rating', data.rating);
    return frm;
  };

  useEffect(() => {
    return () => {
      resetRecoilState();
    };
  }, [resetRecoilState]);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  useQuery(
    'getOutfit',
    () => todayCodyApi.getOutfit(router.query.outfitId as string),
    {
      enabled: router.isReady,
      onSuccess: ({ data }) => {
        const { date, imageUrl, rating, products, comment } = data;

        setCodyThumbnail(imageUrl);
        setValue('rating', rating);
        setValue('comment', comment);
        products.forEach((product: any) => {
          filterProduct(product);
        });

        setDay(new Date(date).toISOString().replace(/T.*$/, ''));
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );
  return (
    <>
      {router.isReady && (
        <Container>
          <MemoTitle day={day} />
          <form style={{ width: '100%' }} onSubmit={handleSubmit(submit)}>
            <MemoContents
              register={register}
              errors={errors}
              setValue={setValue}
              control={control}
            />
          </form>
        </Container>
      )}
    </>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 1178px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
