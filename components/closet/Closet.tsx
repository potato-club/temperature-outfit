import styled from '@emotion/styled';
import { CustomButton, TypoGraphy } from 'components/common';
import { AddModal } from 'components/modal';
import {
  customColor,
} from 'constants/index';
import useGetFilter from 'hooks/useGetFilter';
import { useEffect, useState, useMemo } from "react";
import { useSetRecoilState } from 'recoil';
import { addModal } from 'recoil/atom';
import { filterType } from 'types/editPage/filter.type';
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
  const countPerPage = 20;

  const {filterItem, lastPage, getFilter} = useGetFilter();


  let filter:filterType = useMemo(() => {
    let filtering: filterType = {};
    if (subCategory === 'all') {
      if (mainCategory === 'all') {
        filtering.categoryId = '';
      } else {
        filtering.categoryId = mainCategory;
      }
    } else {
      // (subCategory !== 'all')
      filtering.categoryId = subCategory;
    }

    if (color) {
      filtering.color = color;
    }

    if (name) {
      filtering.query = name;
    }
    
    filtering.limit = countPerPage;
    filtering.page = activePage;
    
    return filtering;
  }, [mainCategory, subCategory, color, name, activePage]);

  useEffect(() => {
    setActivePage(1);
  }, [mainCategory, subCategory, color, name]);

  useEffect(() => {
    getFilter(filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);


  useEffect(() => {
    setColor('');
  }, [mainCategory, subCategory]);

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

        <ClothesContainer clothesData={filterItem} />
      </div>
      <Footer>
        <CustomPagination
          activePage={activePage}
          itemsCountPerPage={countPerPage}
          totalItemsCount={lastPage * countPerPage}
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