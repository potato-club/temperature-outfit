import styled from '@emotion/styled';
import { productApi } from 'api';
import { ClothesBox } from 'components/common';
import useGetFilter from 'hooks/useGetFilter';
import { useEffect, useState } from 'react';
import { productType } from 'types/editPage/product.type';
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryFilter, colorFilter, nameFilter, pageFilter } from "recoil/atom/filtering";
import { useMemo } from "react";
import { filterType } from 'types/editPage/filter.type';
export const ClothesContainer = () => {
  const { filterItem, getFilter } = useGetFilter();
  const query = useRecoilValue(nameFilter);
  const categoryId = useRecoilValue(categoryFilter);
  const color = useRecoilValue(colorFilter);
  // const page = useRecoilValue(pageFilter);
  const [page, setPage] = useRecoilState(pageFilter);

  const filterValue = useMemo(() => {
    const filter: filterType = {};
    if(query) filter.query = query;
    if(categoryId) {
      categoryId === 'all' ? filter.categoryId = '' : filter.categoryId = categoryId;
    }
    if(color) filter.color = color;
    if(page) filter.page = page;
    filter.limit = 20; // * 임시적으로 20개만 보여주게 했음
    return filter;
  }, [query, categoryId, color, page])

  useEffect(() => {
    getFilter(filterValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue]);

  // Todo ! 약간의 오류가 있어보임 확인해야함.
  // useEffect(() => {
  //   setPage(1);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query, categoryId, color]);


  return (
    <Wrapper>
      {filterItem.map((data) => (
        <ClothesBox
          name={data.name}
          url={data.imageUrl}
          key={data.id}
          type="closet"
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 2fr));
  grid-auto-rows: 140px;
  justify-items: center;
`;
