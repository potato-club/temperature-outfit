import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';
import { CustomButton, TypoGraphy } from 'components/common';
import {
  customColor,
  clothesMainCategory,
  clothesSubCategory,
} from 'constants/index';
import { useRecoilState } from 'recoil';
import { chooseModal } from 'recoil/atom';
import { productType } from 'types/editPage/product.type';
import { ClothesContainer } from 'components/closet/components';
import { frontApi } from 'api/productApi';

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
  categoryLabel: string;
}
// 1. 옷 선택하기에서 data를 props로 받아오기
//

export const ChooseModal = ({ categoryLabel: mainCategory }: ModalProps) => {
  const [chooseModalState, setChooseModalState] = useRecoilState(chooseModal);
  const [clothesData, setClothesData] = useState<Array<productType>>();


    const switchMainCategory = () => {
      switch (mainCategory) {
        case '상의':
          return 'top';

        case '아우터':
          return 'outer';

        case '하의':
          return 'bottom';

        case '신발':
          return 'shoes';

        case '기타':
          return 'mainETC';

        default:
          return '없는 카테고리입니다.';
      }
    };

  const category = switchMainCategory();
  
  useEffect(() => {
    frontApi.getFilter('categoryId', category, setClothesData);
  }, [category]);

  const handleClose = () => {
    setChooseModalState((cur) => !cur);
    setClothesData([]);
  }

  return (
    <Modal
      isOpen={chooseModalState}
      onRequestClose={() => handleClose()}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Add Modal">
      <Wrapper>
        <TypoGraphy type="Title" fontWeight="bold">
          {/* {cloth} */}
          {mainCategory}
        </TypoGraphy>
        <ContentBox>
          <ButtonBox>
            {clothesSubCategory[category].map((item, index) => (
              <CustomButton
                onClick={() => frontApi.getFilter('categoryId', item.id, setClothesData)}
                customType="white"
                text={item.name}
                key={index}
              />
            ))}
          </ButtonBox>
          <ClothesImgBox>
            <ClothesContainer clothesData={clothesData} />
          </ClothesImgBox>
        </ContentBox>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 10px;
`;

const ContentBox = styled.section`
  width: 100%;
  height: 200px;
  border: 1px solid ${customColor.gray};
  border-radius: 20px;
  padding: 10px;
`;

const ButtonBox = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ClothesImgBox = styled.section`
  display: flex;
  gap: 10px;
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;
