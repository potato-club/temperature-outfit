import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';
import { CustomButton, TypoGraphy } from 'components/common';
import {
  customColor,
  clothesSubCategory,
} from 'constants/index';
import { useRecoilState } from 'recoil';
import { chooseModal } from 'recoil/atom';
import { productType } from 'types/editPage/product.type';
import { frontApi } from 'api/productApi';
import { ModalClothesContainer } from './ModalClothesContainer';

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

type Props = {
  categoryLabel: string;
}
// 1. 옷 선택하기에서 data를 props로 받아오기
//

export const ChooseModal = ({ categoryLabel }: Props) => {
  const [chooseModalState, setChooseModalState] = useRecoilState(chooseModal);
  const [clothesData, setClothesData] = useState<Array<productType>>([]);

  const switchMainCategory = () => {
    switch (categoryLabel) {
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
    frontApi.getFilter({ categoryId: category }, setClothesData);
    // 아래는 확인용 코드
    // frontApi.getFilter({ categoryId: category, limit: 1000}, setClothesData);
  }, [category]);

  const handleClose = () => {
    setChooseModalState((cur) => !cur);
    // setClothesData([]); // Todo : 이 코드가 없으면, 메인카테고리 넘길때 아주 잠깐 이전 카테고리 아이템들이 보임.
                           // Todo : 이 코드가 있으면, 같은 카테고리를 두번눌렀을때 옷이 없어짐. (모달을 천천히 띄우거나 등등 어떻게할지 회의해봐야할듯)
  };

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
          {categoryLabel}
        </TypoGraphy>
        <ContentBox>
          <ButtonBox>
            {clothesSubCategory[category].map((item, index) => (
              <CustomButton
                onClick={() =>
                  frontApi.getFilter({categoryId: item.id}, setClothesData)
                }
                customType="white"
                text={item.name}
                key={index}
              />
            ))}
          </ButtonBox>
          <ModalClothesContainer
            clothesData={clothesData}
            categoryLabel={categoryLabel}
          />
        </ContentBox>
      </Wrapper>
    </Modal>
  );
};

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
