import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { useRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { infoModal } from 'utils/interactionModal';
import { FieldValues, useForm } from 'react-hook-form';
import { productApi } from 'api';
import {
  ColorRadioForm,
  ImageInput,
  MainSubSelectBoxForm,
  NameInput,
} from './components';
import { CustomButton, TypoGraphy } from 'components/common';
import { useMutation } from "react-query";

export const AddModal = () => {
  const [addModalState, setAddModalState] = useRecoilState(addModal);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm();
  // };

  const { mutate } = useMutation((frm: FormData) => productApi.addProduct(frm),{
    onSuccess: (data) => {
      console.log(data);
      infoModal('서버에 옷 등록 완료!', 'success');
      setAddModalState((cur) => !cur);
    },
    onError: (error) => {
      console.log(error);
    }
  })

  const addClothesItem = async (data: FieldValues) => {
    const frm = new FormData();
    frm.append('image', data.image[0]);
    frm.append('name', data.name);
    frm.append('categoryId', data.categoryId);
    frm.append('color', data.color);
    console.log(frm);
    mutate(frm);
  };

  useEffect(() => {
    reset();
  }, [addModalState, reset]);

  return (
    <Container
      isOpen={addModalState}
      onRequestClose={() => {
        setAddModalState((cur) => !cur);
      }}
      ariaHideApp={false}
      contentLabel="Add Modal">
      <Wrapper>
        <TypoGraphy type="h1" fontWeight="bold">
          옷 등록하기
        </TypoGraphy>
        <form onSubmit={handleSubmit(addClothesItem)}>
          <ImageInput register={register} errors={errors} />
          <ContentBox>
            <NameInput register={register} errors={errors} />
            <CategoryWrapper>
              <MainSubSelectBoxForm setValue={setValue} control={control} />
            </CategoryWrapper>
            <ColorRadioForm control={control} errors={errors} />
            <ButtonWrapper>
              <CustomButton
                customType="colorful"
                text="등록"
                sidePadding="20"
                type="submit"
              />
            </ButtonWrapper>
          </ContentBox>
        </form>
      </Wrapper>
    </Container>
  );
};

const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 680px;
  transform: translate(-50%, -50%);
  background-color: ${customColor.white};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 4px 4px 5px 4px rgba(0, 0, 0, 0.43);
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const CategoryWrapper = styled.section`
  display: flex;
  gap: 10px;
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;
