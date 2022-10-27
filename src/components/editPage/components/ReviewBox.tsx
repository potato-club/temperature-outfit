import React from 'react';
import styled from '@emotion/styled';
import { CustomButton } from 'components/common';
import { customColor } from 'constants/index';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/atom';
import { todayCodyApi, weatherApi } from 'api';
import { IoMdImage } from 'react-icons/io';
import { useRouter } from 'next/router';
import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { ImageInput, RatingInput, CommentInput } from './index';
interface ReviewBoxProps {
  day: string;
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
}

export function ReviewBox({
  day,
  register,
  errors,
  setValue,
  control,
}: ReviewBoxProps) {
  // const router = useRouter();

  // const user = useRecoilValue(userState);

  // const getWeather = async () => {
  //   try {
  //     await weatherApi.getWeather(day, user.locationId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const combineEditProducts = () => {
    // let productsIdString = '';
    // topImage.forEach((data) => (productsIdString += data.id + ','));
    // outerImage.forEach((data) => (productsIdString += data.id + ','));
    // bottomImage.forEach((data) => (productsIdString += data.id + ','));
    // shoesImage.forEach((data) => (productsIdString += data.id + ','));
    // etcImage.forEach((data) => (productsIdString += data.id + ','));
    // productsIdString = productsIdString.slice(0, -1); // 반점 제거
    // if (!productsIdString) { // * 이 검사는 return 으로 받은 값이 빈문자열일때 해도 괜찮아보임
    // infoModal('확인 해주세요!', 'error', '옷을 하나 이상 등록 해주세요!');
    // return;
    // }
          
  };

  const formDataAppend = () => {
    // frm.append('date', `${day}`);
    // frm.append('image', reviewImage!);
    // frm.append('productsId', productsIdString);
    // frm.append('comment', reviewText);
    // frm.append('rating', rating);
    // * put 이 아닌 post 인 경우 아래 코드도 따로 해줘야함
    // frm.append('locationId', user.locationId.toString());
  };

  // const onPut = async () => {
  //   const frm = new FormData();
  //   let productsIdString = '';
  //   topImage.forEach((data) => (productsIdString += data.id + ','));
  //   outerImage.forEach((data) => (productsIdString += data.id + ','));
  //   bottomImage.forEach((data) => (productsIdString += data.id + ','));
  //   shoesImage.forEach((data) => (productsIdString += data.id + ','));
  //   etcImage.forEach((data) => (productsIdString += data.id + ','));
  //   productsIdString = productsIdString.slice(0, -1); // 반점 제거

  //   if (!productsIdString) {
  //     infoModal('확인 해주세요!', 'error', '옷을 하나 이상 등록 해주세요!');
  //     return;
  //   }

  //   try {
  //     frm.append('date', `${day}`);
  //     frm.append('image', reviewImage!);
  //     console.log('리뷰이미지!', reviewImage);
  //     frm.append('productsId', productsIdString);
  //     frm.append('comment', reviewText);
  //     frm.append('rating', rating);

  //     const data = await todayCodyApi.putOutfit(
  //       router.query.outfitId as string,
  //       frm,
  //     );

  //     console.log(data);

  //     Swal.fire({ title: '완료 되었습니다.', icon: 'success' }).then(() =>
  //       window.location.assign('/calendar'),
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const onSave = async () => {
  //   await getWeather();
  //   const frm = new FormData();
  //   let productsIdString = '';
  //   topImage.forEach((data) => (productsIdString += data.id + ','));
  //   outerImage.forEach((data) => (productsIdString += data.id + ','));
  //   bottomImage.forEach((data) => (productsIdString += data.id + ','));
  //   shoesImage.forEach((data) => (productsIdString += data.id + ','));
  //   etcImage.forEach((data) => (productsIdString += data.id + ','));
  //   productsIdString = productsIdString.slice(0, -1); // 반점 제거

  //   if (!productsIdString) {
  //     infoModal('확인 해주세요!', 'error', '옷을 하나 이상 등록 해주세요!');
  //     return;
  //   }

  //   try {
  //     frm.append('date', `${day}`);
  //     frm.append('image', reviewImage!);
  //     frm.append('productsId', productsIdString);
  //     frm.append('comment', reviewText);
  //     frm.append('rating', rating);
  //     frm.append('locationId', user.locationId.toString());


  //     const data = await todayCodyApi.addProduct(frm);
  //     console.log(data);
  //     Swal.fire({ title: '완료 되었습니다.', icon: 'success' }).then(() =>
  //       window.location.assign('/calendar'),
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const confirmBtn = () => {
  //   confirmModal(
  //     '등록 하시겠습니까?',
  //     (router.query.outfitId as string) ? onPut : onSave,
  //   );
  // };

  // const resetTop = useResetRecoilState(topState);
  // const resetOuter = useResetRecoilState(outerState);
  // const resetBottom = useResetRecoilState(bottomState);
  // const resetShoes = useResetRecoilState(shoesState);
  // const resetEtc = useResetRecoilState(etcState);

  // // * null 일때는 삭제, undefined 는 기존
  // const [reviewImage, setReviewImage] = useState<File | null>();
  // // const [reviewThumbnail, setReviewThumbnail] = useState<string>('');
  // const [reviewText, setReviewText] = useState<string>('');
  // const [rating, setRating] = useState<string>('0');

  // const topImage = useRecoilValue(topState);
  // const outerImage = useRecoilValue(outerState);
  // const bottomImage = useRecoilValue(bottomState);
  // const shoesImage = useRecoilValue(shoesState);
  // const etcImage = useRecoilValue(etcState);

  return (
    <Container>
      <ImageInput register={register} errors={errors} setValue={setValue} />
      <CommentInput register={register} errors={errors} />
      <RatingInput control={control} errors={errors} />
      <ButtonContainer>
        <CustomButton
          customType="white"
          text="취소"
          sidePadding="40"
          type="reset"
          // onClick={handleCancel}
        />
        <CustomButton
          customType="colorful"
          text="등록"
          sidePadding="40"
          type="submit"
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.section`
  width: 40%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StarWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${customColor.brandColor5};
  margin-bottom: 40px;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 0 12px;
  @media (max-width: 525px) {
    flex-direction: column;
    gap: 12px 0;
  }
`;

const InitialImage = styled(IoMdImage)`
  width: 360px;
  height: 240px;
  background-color: ${customColor.gray};
`;
