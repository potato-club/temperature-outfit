import styled from '@emotion/styled';
import { ClothesBox } from 'components/common';
import { clothesData } from 'dummy/clothesData';
type Props = {
  category : string;
};
export const ClothesContainer = ({category}:Props) => {
  return (
    <ItemContainer>
      {clothesData.map((data, index) => (
        data.category === category && <ClothesBox name={data.name} url={data.url} key={index} type='closet'/>
      ))}
    </ItemContainer>
  );
};

const ItemContainer = styled.section`
  width: 100%;
  height: 600px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 2fr));
  grid-auto-rows: 140px;
  justify-items: center;
`;


