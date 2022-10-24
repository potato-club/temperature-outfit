import styled from '@emotion/styled';
import { categories } from 'constants/categories';
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
  const index = categories.findIndex(
    (data) => data.title === categoryLabel,
  );
  const recoil = categories[index].recoil;

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
  flex-wrap: wrap;
  min-height: 244px;
  display: flex;
  gap: 4px;
  align-items: flex-start;
  justify-content: flex-start;
`;
