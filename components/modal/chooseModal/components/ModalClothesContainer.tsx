import styled from '@emotion/styled';
import { categories } from 'constants/categories';
import useFilter from 'hooks/useFilter';
import { useRecoilValue } from 'recoil';
import { categoryLabel } from 'recoil/atom/chooseModal';
import { ModalClothesBox } from './ModalClothesBox';
import { useEffect, useMemo } from 'react';
import useGetFilter from 'hooks/useGetFilter';

export const ModalClothesContainer = () => {
  const category = useRecoilValue(categoryLabel);

  const recoil = useMemo(() => {
    const index = categories.findIndex((data) => data.title === category);
    return categories[index].recoil;
  }, [category]);

  const { filter } = useFilter(10);
  const { filterItem, getFilter } = useGetFilter();

  useEffect(() => {
    getFilter(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <ItemContainer>
      {filterItem &&
        filterItem.map((data) => (
          <ModalClothesBox
            name={data.name}
            url={data.imageUrl}
            key={data.id}
            id={data.id}
            recoil={recoil}
          />
        ))}
    </ItemContainer>
  );
};

const ItemContainer = styled.section`
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  min-height: 244px;
  display: flex;
  gap: 4px;
  align-items: flex-start;
  justify-content: flex-start;
`;
