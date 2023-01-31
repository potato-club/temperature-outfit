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
import { Title } from './components/Title';
import {
  completeCheckModal,
  errorModal,
  infoModal,
} from 'utils/interactionModal';
import useEditResetRecoil from 'hooks/useEditResetRecoil';
import { useMutation, useQuery } from 'react-query';
import { mutateParamType } from 'types/editPage/mutateParam.type';
import { debounceFunction } from 'utils/debounceFunction';
import { Contents } from './components/Contents';

export default function EditPage() {
  const router = useRouter();
  const [submitTimer, setSubmitTimer] = useState<NodeJS.Timer>();
  const [day, setDay] = useState('');

  useEffect(() => {
    if(router.isReady) {
      setDay(router.query.day as string);
    }
  }, [router])

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
    return [
      ...topImages,
      ...outerImages,
      ...bottomImages,
      ...shoesImages,
      ...etcImages,
    ].map(({ id }) => id)
      .join();
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
    watch,
    formState: { errors },
  } = useForm();

  useQuery(
    'getOutfit',
    () => todayCodyApi.getOutfit(router.query.outfitId as string),
    {
      enabled: !!router.query.outfitId,
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
          <Title day={day} />
          <form style={{ width: '100%' }} onSubmit={handleSubmit(submit)}>
            <Contents
              register={register}
              errors={errors}
              setValue={setValue}
              control={control}
              watch={watch}
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
  padding: 12px;
`;
