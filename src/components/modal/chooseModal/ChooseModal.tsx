import React, { useCallback } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chooseModal } from 'recoil/atom';
import { CustomPagination } from 'components/closetPage/components/CustomPagination';
import { categoryLabel } from 'recoil/atom/chooseModal';
import { CategoryBox, ModalClothesContainer } from './components';

export const ChooseModal = () => {
  const [chooseModalState, setChooseModalState] = useRecoilState(chooseModal);
  const category = useRecoilValue(categoryLabel);

  const handleClose = useCallback(() => {
    setChooseModalState((cur) => !cur);
  }, [setChooseModalState]);

  return (
    <Container
      isOpen={chooseModalState}
      onRequestClose={handleClose}
      ariaHideApp={false}
      contentLabel="Add Modal">
      <Wrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          {category}
        </TypoGraphy>
        <ContentBox>
          <CategoryBox />
          <ModalClothesContainer />
        </ContentBox>
        <CustomPagination />
      </Wrapper>
    </Container>
  );
};

const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 800px;
  box-sizing: content-box;
  min-height: 412px;
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
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(150, 137, 235, 0.6);
    border-radius: 24px;
  }
`;

const ContentBox = styled.section`
  width: 100%;
  border: 1px solid ${customColor.gray};
  border-radius: 20px;
  padding: 12px;
`;

const ButtonBox = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
