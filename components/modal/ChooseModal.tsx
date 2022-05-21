import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';
import { CustomButton, TypoGraphy } from 'components/common';
import { customColor } from 'constants/customColor';
import { clothesCategory } from 'constants/clothesCategory';
import { ClothesDummy } from 'components/common/ClothesDummy';

const customStyles = {
  content: {
    top: '30%',
    left: '30%',
    width: '740px',
    height: '360px',
    borderRadius: '20px',
    boxShadow: '4px 4px 5px 4px rgba(0,0,0,0.43)',
  },
};

interface ModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

export const ChooseModal = ({ modalIsOpen, closeModal }: ModalProps) => {
  const [cloth, setCloth] = useState('상의');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Modal">
      <Wrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          {cloth}
        </TypoGraphy>
        <ContentBox>
          <ButtonBox>
            {clothesCategory.top.map((item, index) => (
              <CustomButton customType="white" text={item} key={index} />
            ))}
          </ButtonBox>
          <ClothesImgBox>
            <ClothesDummy height={120} />
            <ClothesDummy height={120} />
            <ClothesDummy height={120} />
          </ClothesImgBox>
        </ContentBox>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 10px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid ${customColor.gray};
  border-radius: 20px;
  padding: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ClothesImgBox = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;
