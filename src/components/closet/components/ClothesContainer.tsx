import styled from '@emotion/styled';
import { ClothesBox } from 'components/common';
import useFilter from 'hooks/useFilter';
import useGetFilter from 'hooks/useGetFilter';
import { useEffect } from 'react';

export const ClothesContainer = () => {
  const { filter } = useFilter(20);

  const { filterItem, getFilter } = useGetFilter();

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
