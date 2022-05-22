import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { customColor } from 'constants/customColor';
import {
  MainCategory,
  RadioButtons,
  SubCategory,
} from 'components/closet/components';

const customStyles = {
  content: {
    top: '8%',
    left: '36%',
    width: '640px',
    height: '800px',
    borderRadius: '20px',
    boxShadow: '4px 4px 5px 4px rgba(0,0,0,0.43)',
  },
};

interface ModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

export const AddModal = ({ modalIsOpen, closeModal }: ModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Modal">
      <Wrapper>
        <Title>
          <TypoGraphy type="Title" fontWeight="bold">
            내 옷 등록하기
          </TypoGraphy>
        </Title>
        <Img />
        <ContentBox>
          <InputWrapper>
            <TypoGraphy type="h3" fontWeight="bold">
              이름
            </TypoGraphy>
            <Input placeholder="옷의 이름을 입력해주세요." />
          </InputWrapper>
          <CategoryWrapper>
            <InputWrapper>
              <MainCategory />
            </InputWrapper>
            <InputWrapper>
              <SubCategory />
            </InputWrapper>
          </CategoryWrapper>
          <RadioButtonsWrapper>
            <RadioButtons />
          </RadioButtonsWrapper>
          <ButtonWrapper>
            <CustomButton customType="colorful" text="등록" sidePadding="20" />
          </ButtonWrapper>
        </ContentBox>
      </Wrapper>
    </Modal>
  );
};
const Img = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${customColor.gray};
  border-radius: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10px;
  padding: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const CategoryWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

const Input = styled.input`
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${customColor.gray};
  padding-left: 10px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const RadioButtonsWrapper = styled.div``;

const Title = styled.div``;
