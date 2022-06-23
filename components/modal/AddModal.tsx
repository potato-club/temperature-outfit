import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { CustomButton, SelectBox, TypoGraphy } from 'components/common';
import { customColor } from 'constants/customColor';
import { RadioButtons } from 'components/closet/components';
import { realClothesCategory } from 'constants/realClothesCategory';

const customStyles = {
  content: {
    width: '620px',
    borderRadius: '20px',
    boxShadow: '4px 4px 5px 4px rgba(0,0,0,0.43)',
    inset: '12% 40px 40px 36%',
    height: '800px',
    // 어느정도 낮아지면 그냥 가로로 하든가 아니면 크기 줄이던가 해야됨
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
          <TypoGraphy type="h1" fontWeight="bold">
            옷 등록하기
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
              {/*  */}
              <SelectBox
                propsArray={realClothesCategory.top.subCategory}
                label={'메인'}
              />
            </InputWrapper>
            <InputWrapper>
              <SelectBox propsArray={[]} label={'서브'} />
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
const Img = styled.article`
  width: 100%;
  height: 400px;
  background-color: ${customColor.gray};
  border-radius: 40px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  /* height: 760px; */
  gap: 10px;
  padding: 20px;
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
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

const Input = styled.input`
  height: 36px;
  border-radius: 4px;
  border: 1px solid ${customColor.gray};
  padding-left: 10px;
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const RadioButtonsWrapper = styled.section``;

const Title = styled.section``;
