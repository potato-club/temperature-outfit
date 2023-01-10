import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { useRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { errorModal, infoModal } from 'utils/interactionModal';
import { FieldValues, useForm } from 'react-hook-form';
import { productApi } from 'api';
import {
  ColorRadioForm,
  ImageInput,
  MainSubSelectBoxForm,
  NameInput,
} from './components';
import { CustomButton, TypoGraphy } from 'components/common';
import { useMutation, useQueryClient } from 'react-query';
import { debounceFunction } from 'utils/debounceFunction';

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
  const [submitTimer, setSubmitTimer] = useState<NodeJS.Timer>();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (frm: FormData) => productApi.addProduct(frm),
    {
      onSuccess: (data) => {
        console.log(data);
        infoModal('옷 등록 완료', 'success');
        setAddModalState((cur) => !cur);
        queryClient.invalidateQueries('getItem');
      },
      onError: (err: unknown) => {
        errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );

  const addClothesItem = async (data: FieldValues) => {
    debounceFunction({
      timer: submitTimer,
      setTimer: setSubmitTimer,
      fn: async () => {
        const frm = new FormData();
        frm.append('image', data.image[0]);
        frm.append('name', data.name);
        frm.append('categoryId', data.categoryId);
        frm.append('color', data.color);
        console.log(frm);
        mutate(frm);
      },
    });
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
      style={{
        overlay: {
          background: 'rgba(0,0,0,0.4)',
          zIndex: 100,
        },
      }}
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
  max-width: 680px;
  transform: translate(-50%, -50%);
  background-color: ${customColor.white};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 1px 1px 5px -1px #bbb;
  width: 30vw;
  height: 82vh;
  max-height: 700px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Wrapper = styled.section``;

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
  gap: 1.5vh;
  margin-top: 10px;
`;
