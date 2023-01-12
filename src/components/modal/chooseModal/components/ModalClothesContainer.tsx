import styled from '@emotion/styled';
import { categories } from 'constants/categories';
import useFilter from 'hooks/useFilter';
import { useRecoilValue } from 'recoil';
import { categoryLabel } from 'recoil/atom/chooseModal';
import { ModalClothesBox } from './ModalClothesBox';
import {  useMemo } from 'react';
import useGetItem from 'hooks/useGetItem';

export const ModalClothesContainer = () => {
  const category = useRecoilValue(categoryLabel);

  const recoil = useMemo(() => {
    const index = categories.findIndex((data) => data.label === category);
    return categories[index].recoil;
  }, [category]);

  const { filter } = useFilter(5);
  const { filterItem } = useGetItem(filter);

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
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  min-height: 200px;
  margin: 12px 8px 8px;
`;
