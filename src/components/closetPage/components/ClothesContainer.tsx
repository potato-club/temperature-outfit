import styled from '@emotion/styled';
import { productApi } from 'api';
import { ClothesBox } from 'components/common';
import useFilter from 'hooks/useFilter';
import useGetItem from 'hooks/useGetItem';

export const ClothesContainer = () => {
  const { filter } = useFilter(20);

  const { filterItem } = useGetItem(filter);

  const removeItem = async(id: string) => {
    const { data } = await productApi.deleteProduct(id);
    console.log(data);
  }


  // useEffect(() => {
  //   getItem(filter);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filter]);

  return (
    <Wrapper>
      {filterItem.map((data) => (
        <ClothesBox
          name={data.name}
          url={data.imageUrl}
          key={data.id}
          type="closet"
          id={data.id}
          deleteFn={removeItem}
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
