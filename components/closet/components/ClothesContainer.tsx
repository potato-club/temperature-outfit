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
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: 600px;
  border: 3px solid;
  div {
    display: inline-block;
  }
`;
