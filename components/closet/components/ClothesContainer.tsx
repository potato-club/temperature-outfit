import { ClothesDummy } from 'components/common/ClothesDummy';
import styled from '@emotion/styled';

export const ClothesContainer: React.FC = () => {
  return (
    <ItemContainer>
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
      <ClothesDummy />
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
