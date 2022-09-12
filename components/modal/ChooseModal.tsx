import React, { useCallback, useEffect, useMemo } from 'react';
import Modal from 'react-modal';
import styled from '@emotion/styled';
import { useState } from 'react';
import { CustomButton, TypoGraphy } from 'components/common';
import { customColor, clothesSubCategory } from 'constants/index';
import { useRecoilState } from 'recoil';
import { chooseModal } from 'recoil/atom';
import { productType } from 'types/editPage/product.type';
import { filterType, frontApi } from 'api/productApi';
import { ModalClothesContainer } from './ModalClothesContainer';
import useGetFilter from 'hooks/useGetFilter';
import { CustomPagination } from 'components/closet/components/CustomPagination';
type Props = {
  categoryLabel: string;
};
// 1. 옷 선택하기에서 data를 props로 받아오기
//

export const ChooseModal = ({ categoryLabel }: Props) => {
  const [chooseModalState, setChooseModalState] = useRecoilState(chooseModal);
  // const [clothesData, setClothesData] = useState<Array<productType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { filterItem, maxPage, getFilter } = useGetFilter();
  const [activePage, setActivePage] = useState<number>(1);
  const countPerPage = 20;

  const category = useMemo(() => {
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
  }, [categoryLabel]);

  const getClothes = useCallback(
    async (filter: filterType) => {
      setLoading(true);
      await getFilter(filter);
      setLoading(false);
    },
    [getFilter],
  );

  useEffect(() => {
    getClothes({ categoryId: category, page: activePage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, activePage]);

  useEffect(() => {
    setActivePage(1);
  }, [category])

  const handleClose = () => {
    setChooseModalState((cur) => !cur);
  };

  return (
    <Container
      isOpen={chooseModalState}
      onRequestClose={() => handleClose()}
      ariaHideApp={false}
      contentLabel="Add Modal">
      {!loading && (
        <Wrapper>
          <TypoGraphy type="Title" fontWeight="bold">
            {/* {cloth} */}
            {categoryLabel}
          </TypoGraphy>
          <ContentBox>
            <ButtonBox>
              {clothesSubCategory[category] &&
                clothesSubCategory[category].map((item, index) => (
                  <CustomButton
                    onClick={() => {
                      setActivePage(1);
                      getClothes({ categoryId: item.id });
                    }}
                    customType="white"
                    text={item.name}
                    key={index}
                  />
                ))}
            </ButtonBox>
            <ModalClothesContainer
              clothesData={filterItem}
              categoryLabel={categoryLabel}
            />
          </ContentBox>
          <CustomPagination
            activePage={activePage}
            itemsCountPerPage={countPerPage}
            totalItemsCount={maxPage * countPerPage}
            onChange={(e) => {
              setActivePage(e);
            }}
          />
        </Wrapper>
      )}
    </Container>
  );
};

const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 800px;
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
