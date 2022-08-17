import styled from '@emotion/styled';
import { categories } from 'types/editPage/categories';
import { productType } from 'types/editPage/product.type';
import { ModalClothesBox } from './ModalClothesBox';
type Props = {
  clothesData: productType[] | undefined;
  categoryLabel: string;
};
export const ModalClothesContainer = ({
  clothesData,
  categoryLabel,
}: Props) => {
  console.log(categoryLabel);
  const findIndex = categories.findIndex(
    (data) => data.title === categoryLabel,
  );
  const recoil = categories[findIndex].recoil;

  return (
    <ItemContainer>
      {clothesData &&
        clothesData.map((data) => (
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
  min-height: 140px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-items: center;
`;
