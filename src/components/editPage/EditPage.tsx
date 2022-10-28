import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { editDummy } from 'dummy/newEditDummy';
import { useRouter } from 'next/router';
import {
  topState,
  bottomState,
  etcState,
  outerState,
  shoesState,
  userState,
} from 'recoil/atom';
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { clothesSubCategory } from 'constants/index';
import { FieldValues, useForm } from 'react-hook-form';
import { codyThumbnail } from 'recoil/atom/editState';
import { todayCodyApi, weatherApi } from 'api';
import { MemoTitle } from './components/Title';
import { MemoContents } from './components/Contents';
import { infoModal } from 'utils/interactionModal';
import Swal from 'sweetalert2';

export default function EditPage() {
  const router = useRouter();
  const dayQuery = router.query.day as string;
  const tempDay = '2222-22-22';

  const submitTest = async (data: FieldValues) => {
    const productsId = getAllEditProductsId();
    // 등록된옷이 하나도 없을때
    if (!productsId) {
      infoModal('확인 해주세요!', 'error', '옷을 하나 이상 등록 해주세요!');
      return;
    }
    const frm = formDataAppend(data, productsId);

    // 수정일때
    if (router.query.outfitId as string) {
      try {
        const res = await todayCodyApi.putOutfit(
          router.query.outfitId as string,
          frm,
        );
        console.log(res);
        Swal.fire({ title: '완료 되었습니다.', icon: 'success' }).then(() =>
          window.location.assign('/calendar'),
        );
      } catch (e) {
        console.log(e);
      }
      // 등록일때
    } else {
      await getWeather();
      frm.append('locationId', user.locationId.toString());

      try {
        const res = await todayCodyApi.addProduct(frm);
        console.log(res);
        Swal.fire({ title: '완료 되었습니다.', icon: 'success' }).then(() =>
          window.location.assign('/calendar'),
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  const day = new Date(dayQuery ?? tempDay).toISOString().replace(/T.*$/, '');

  const [topImages, setTopImages] = useRecoilState(topState);
  const [outerImages, setOuterImages] = useRecoilState(outerState);
  const [bottomImages, setBottomImages] = useRecoilState(bottomState);
  const [shoesImages, setShoesImages] = useRecoilState(shoesState);
  const [etcImages, setEtcImages] = useRecoilState(etcState);

  const setCodyThumbnail = useSetRecoilState(codyThumbnail);

  const user = useRecoilValue(userState);

  const getWeather = async () => {
    try {
      await weatherApi.getWeather(day, user.locationId);
    } catch (error) {
      console.log(error);
    }
  };

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

  const resetRecoil = useCallback(() => {
    setTopImages([]);
    setOuterImages([]);
    setBottomImages([]);
    setShoesImages([]);
    setEtcImages([]);
    setCodyThumbnail('');
  }, [setTopImages, setOuterImages, setBottomImages, setShoesImages, setEtcImages, setCodyThumbnail]);

  useEffect(() => {
    return () => {
      resetRecoil();
    };
  }, [resetRecoil]);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    router.query.outfitData &&
      (() => {
        const { imageUrl, rating, products, comment } = JSON.parse(
          router.query.outfitData as string,
        );
        setCodyThumbnail(imageUrl);
        setValue('rating', rating);
        setValue('comment', comment);

        products.forEach((product: any) => {
          filterProduct(product);
        });
      })();
  }, [filterProduct, router.query.outfitData, setCodyThumbnail, setValue]);

  return (
    <Container>
      <MemoTitle
        average={editDummy.average}
        max={editDummy.max}
        min={editDummy.min}
        day={day}
      />
      <form style={{ width: '100%' }} onSubmit={handleSubmit(submitTest)}>
        <MemoContents
          day={day}
          register={register}
          errors={errors}
          setValue={setValue}
          control={control}
        />
      </form>
    </Container>
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
