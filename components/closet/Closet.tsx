import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { AddModal, ChooseModal } from 'components/modal';
import { useState } from 'react';
import {
  SubCategory,
  MainCategory,
  ClothesContainer,
  RadioButtons,
  SearchBox,
} from './components';

export const Closet: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // 밑에 것들 지울것들임
  const openModal2 = () => {
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };

  return (
    <Wrapper>
      <TypoGraphy type="Title" fontWeight="bold">
        옷장
      </TypoGraphy>

      <CategoryWrapper>
        <MainCategory />
        <SubCategory />
        <RadioButtons />
        <SearchBox />
      </CategoryWrapper>

      <Horizen />

      <ClothesContainer />

      <Footer>
        <CustomButton
          customType="colorful"
          text="추가"
          sidePadding="20"
          height={40}
          onClick={openModal}
        />
        {/* 이건 잠시 있는 것 */}
        <CustomButton
          customType="colorful"
          text="옷 선택하기 (임시)"
          sidePadding="20"
          height={40}
          onClick={openModal2}
        />
      </Footer>
      <AddModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

      {/* 이건 잠시 있는 것 */}
      <ChooseModal modalIsOpen={modalIsOpen2} closeModal={closeModal2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  max-width: 1178px;
  height: 90%;
  max-height: 956px;
  margin-top: 20px;
  padding: 60px 64px 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 4px gray;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CategoryWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const Horizen = styled.hr`
  border: 1px solid;
  border-bottom: 0px;
  margin: 24px 0 24px 0;
  width: 100%;
`;

const Footer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: end;
`;
