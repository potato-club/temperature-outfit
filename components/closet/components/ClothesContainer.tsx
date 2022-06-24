import { ClothesDummy } from 'components/common/ClothesDummy';
import styled from '@emotion/styled';
import { clothesData } from 'dummy/clothesData';
export const ClothesContainer: React.FC = () => {
  return (
    <ItemContainer>
      {clothesData.map((data, index) => (
        <ClothesDummy name={data.name} url={data.url} key={index}/>
      ))}
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: 600px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 2fr));
  grid-auto-rows: 140px;
  justify-items: center;
`;
