import styled from '@emotion/styled';
import { productApi } from 'api';
import { ClothesBox } from 'components/common';
import { clothesData } from 'dummy/clothesData';
type Props = {
  category: string;
};
export const ClothesContainer = ({ category }: Props) => {
  const getClothes = async () => {
    const data = await productApi.getAllProduct({
        params : {
          categoryId: category,
      },
    });
    console.log(data);

    // 옷 한벌 조회
    // const data = await productApi.getProduct('cl5tir1fc00655gwkgxm6023k');
    // console.log(data);
  };
  getClothes();
  return (
    <ItemContainer>
      {clothesData.map(
        (data, index) =>
          data.category === category && (
            <ClothesBox
              name={data.name}
              url={data.url}
              key={index}
              type="closet"
            />
          ),
      )}
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
