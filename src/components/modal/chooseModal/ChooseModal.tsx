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
      style={{
        overlay: {
          background: 'rgba(0,0,0,0.4)',
          zIndex: 100,
        },
      }}
      contentLabel="Add Modal">
      <Wrapper>
        <P>{category}</P>
        <ContentBox>
          <CategoryBox />
          <ModalClothesContainer />
        </ContentBox>

        <CustomPagination />
      </Wrapper>
    </Container>
  );
};
const P = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 684px;
  box-sizing: content-box;
  min-height: 400px;
  transform: translate(-50%, -50%);
  background-color: ${customColor.white};
  padding: 24px 28px 10px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px -1px #bbb;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 4px 0;
  gap: 8px;
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
  border-radius: 8px;
  padding: 8px;
`;
