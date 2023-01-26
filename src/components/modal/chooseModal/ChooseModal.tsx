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
          background: customColor.black + '66',
          zIndex: 100,
        },
      }}
      contentLabel="Add Modal">
      <Wrapper>
        <TextWrapper>
          <TypoGraphy type="h1" fontWeight="bold">
            {category}
          </TypoGraphy>
        </TextWrapper>
        <ContentBox>
          <CategoryBox />
          <ModalClothesContainer />
        </ContentBox>
        <Footer>
          <CustomPagination />
        </Footer>
      </Wrapper>
    </Container>
  );
};
const TextWrapper = styled.div`
  margin-bottom: 2px;
`;

const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 684px;
  box-sizing: content-box;
  min-height: 300px;
  transform: translate(-50%, -50%);
  background-color: ${customColor.white};
  padding: 24px 28px 24px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px -1px ${customColor.grayDark};
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
`;

const ContentBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${customColor.grayLight};
  border-radius: 8px;
  padding: 12px;
  gap: 12px 0;
`;
const Footer = styled.section`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;
