import styled from '@emotion/styled';
import { productApi } from 'api';
import { ClothesBox } from 'components/common';
import { useEffect, useState } from 'react';
import { productType } from 'types/editPage/product.type';
type Props = {
  category: string;
};
export const ClothesContainer = ({ category }: Props) => {
  const [clothesData, setClothesData] = useState<Array<productType>>();
  const getClothes = async () => {
    await productApi.getFilter({
        params : {
          categoryId: category,
      },
    }
      ).then((res) => {
      console.log(res.data);
      setClothesData(res.data);
    }).catch(err => console.log(err));
    
    // 옷 한벌 조회
    // const data = await productApi.getProduct('cl5tir1fc00655gwkgxm6023k');
    // console.log(data);
  };
  useEffect(() => {
    getClothes();
  }, []);

  return (
    <ItemContainer>
      {clothesData && clothesData.map(
        (data:productType) =>
          data.categoryId === "halfT" && (
            <ClothesBox
              name={data.name}
              url={data.imageUrl}
              key={data.id}
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
