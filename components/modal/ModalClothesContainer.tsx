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
            id={data.name} // ! Todo : name 이 아닌 id 로 해야할것같음. (같은 이름의 옷이 있을수도 있으니(?)
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
