import React from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';

const customStyles = {
  content: {
    top: '10%',
    left: '30%',
    width: '800px',
    height: '800px',
    // transform: 'translate(-50%, -50%)',
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
      <Title>주의</Title>
      <ContentBox>할일을 입력하고 추가 버튼을 누르세요</ContentBox>
      <CloseButton onClick={closeModal}>닫기</CloseButton>
    </Modal>
  );
};

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: red;
`;
const ContentBox = styled.p`
  font-size: 32px;
  text-align: center;
`;
const CloseButton = styled.button`
  font-size: 32px;
  width: 100px;
  height: 48px;
  display: block;
  margin-top: 136px;
  margin-left: 680px;
`;
