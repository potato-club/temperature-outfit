import styled from '@emotion/styled';
import { ClothesBox } from 'components/common';
import useGetFilter from 'hooks/useGetFilter';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  categoryFilter,
  colorFilter,
  nameFilter,
  pageFilter,
} from 'recoil/atom/filtering';
import { filterType } from 'types/editPage/filter.type';
export const ClothesContainer = () => {
  const [filter, setFilter] = useState<filterType>({
    query: '',
    categoryId: '',
    limit: 20, // * 임시적으로 limit 는 20개
    page: 1,
  });

  const { filterItem, getFilter } = useGetFilter();
  const query = useRecoilValue(nameFilter);
  const categoryId = useRecoilValue(categoryFilter);
  const color = useRecoilValue(colorFilter);
  const [page, setPage] = useRecoilState(pageFilter);

  useEffect(() => {
    setFilter((prev) => ({ ...prev, page }));
  }, [page]);

  useEffect(() => {
    if (color) {
      setFilter((prev) => ({ ...prev, color, page: 1 }));
      setPage(1);
    } else {
      setFilter((prev) => {
        const { color, ...rest } = prev; // Todo 현재 color 필터값에 '' 값이 들어가면 서버측에서 '' 를 색상으로 인식하는걸로 보임 -> 회의해보고 수정이 가능하면 이 코드 수정해야함
        return rest;
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  useEffect(() => {
    categoryId === 'all'
      ? setFilter((prev) => ({ ...prev, categoryId: '', page: 1 }))
      : setFilter((prev) => ({ ...prev, categoryId, page: 1 }));
    setPage(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  useEffect(() => {
    setFilter((prev) => ({ ...prev, query, page: 1 }));
    setPage(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // 확인용 코드
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    getFilter(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

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
