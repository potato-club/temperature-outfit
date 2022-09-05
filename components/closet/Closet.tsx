import styled from '@emotion/styled';
import { filterType, frontApi } from 'api/productApi';
import { CustomButton, TypoGraphy } from 'components/common';
import { AddModal } from 'components/modal';
import {
  customColor,
} from 'constants/index';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { productType } from 'types/editPage/product.type';
import { ClothesContainer, ColorRadio, SearchBox } from './components';
import CategoryFilterBox from './components/CategoryFilterBox';
import { CustomPagination } from './components/CustomPagination';

export const Closet: React.FC = () => {
  const setAddModalState = useSetRecoilState(addModal);

  const [mainCategory, setMainCategory] = useState('all');
  const [subCategory, setSubCategory] = useState('all');
  const [color, setColor] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [activePage, setActivePage] = useState<number>(1);
  const countPerPage = 10;

  const [clothesData, setClothesData] = useState<Array<productType>>();

  useEffect(() => {
    setColor('');
  }, [mainCategory, subCategory]);

  useEffect(() => {
    let filter: filterType = {};
    if (subCategory === 'all') {
      if (mainCategory === 'all') {
        filter.categoryId = '';
      } else {
        filter.categoryId = mainCategory;
      }
    } else {
      // (subCategory !== 'all')
      filter.categoryId = subCategory;
    }

    if (color) {
      filter.color = color;
    }

    if (name) {
      filter.query = name;
    }

    filter.limit = countPerPage;
    filter.page = activePage;

    frontApi.getFilter(filter, setClothesData);
  }, [mainCategory, subCategory, color, name, activePage]);

  // useEffect(() => {
  //   getColorFilter(color);
  // }, [color]);

  return (
    <Container>
      <div>
        <TypoGraphy type="Title" fontWeight="bold">
          옷장
        </TypoGraphy>
        <FilterWrapper>
          <section style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <CategoryFilterBox
              mainCategory={mainCategory}
              subCategory={subCategory}
              setMainCategory={setMainCategory}
              setSubCategory={setSubCategory}
            />
            <ColorRadio setColor={setColor} color={color} filter />
          </section>
          <SearchBox name={name} setName={setName} />
        </FilterWrapper>

        <Line />

        <ClothesContainer clothesData={clothesData} />
      </div>
      <Footer>
        <CustomPagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={1000} // Todo : 나중에 api 에서 필터된것들의 전체갯수 보내주면 그걸로 넣으면 됨
          onChange={(e) => {
            setActivePage(e);
          }}
        />
        <ButtonWrapper>
          <CustomButton
            customType="colorful"
            text="추가"
            sidePadding="20"
            height={40}
            onClick={() => setAddModalState((cur) => !cur)}
          />
          <AddModal />
        </ButtonWrapper>
      </Footer>
    </Container>
  );
};

const Container = styled.section`
  width: 70%;
  max-width: 1178px;
  height: 90%;
  max-height: 956px;
  margin-top: 20px;
  padding: 60px 64px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 4px gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const FilterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  gap: 20px;
`;

const Line = styled.hr`
  border: 1px solid ${customColor.gray};
  border-bottom: 0px;
  margin: 24px 0 24px 0;
`;

const Footer = styled.section`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.section`
  margin-top: 12px;
  display: flex;
  justify-content: end;
`;