import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { DressRoom, ReviewBox, Title } from './components';
import { useRouter } from 'next/router';
import { todayCodyApi } from 'api';
import { clothesMainCategory } from 'constants/index';
import { clothesSubCategory } from 'constants/clothesSubCategory';
import { useQuery } from 'react-query';
import { outfitDataType } from 'types/outfitViewPage/outfitData.type';
import { errorModal } from 'utils/interactionModal';
import { customColor } from 'constants/index';

type totalTemperatureType = {
  highestTemperature: string;
  temperature: string;
  lowestTemperature: string;
};

export default function OutfitView() {
  const router = useRouter();
  const [outfitData, setOutfitData] = useState<outfitDataType>();
  const [weather, setWeather] = useState<totalTemperatureType>();

  useQuery(
    'getOutfit',
    () => todayCodyApi.getOutfit(router.query.id as string),
    {
      enabled: router.isReady,
      onSuccess: ({ data }) => {
        const {
          date,
          imageUrl,
          rating,
          products,
          comment,
          weather: { temperature, lowestTemperature, highestTemperature },
        } = data;

        setWeather({ temperature, lowestTemperature, highestTemperature });

        setOutfitData({
          date,
          imageUrl,
          rating,
          products,
          comment,
        });
      },
      onError: (err: unknown) => {
        // errorModal('알 수 없는 오류', '서버의 상태가 이상합니다.');
      },
    },
  );

  const categories = clothesMainCategory.filter((cate) => cate.id !== 'all');

  const categoryFilter = (id: string) => {
    const subCategories = clothesSubCategory[id].map((item) => item.id);
    if (!outfitData) return;
    return outfitData.products.filter((product) => {
      return subCategories.includes(product.categoryId);
    });
  };

  return (
    <Container>
      {outfitData && weather && (
        <>
          <Title
            average={weather.temperature}
            max={weather.highestTemperature}
            min={weather.lowestTemperature}
            day={outfitData.date}
          />
          <Contents>
            <CodyBox>
              {categories.map(({ name, id }) => (
                <Category key={id}>
                  <Label>
                    <TypoGraphy type="h3" fontWeight="bold">
                      {name}
                    </TypoGraphy>
                  </Label>
                  <DressRoom products={categoryFilter(id)} />
                </Category>
              ))}
            </CodyBox>
            <ReviewBox
              comment={outfitData.comment}
              rating={outfitData.rating}
              outFitImageUrl={outfitData.imageUrl}
            />
          </Contents>
        </>
      )}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 1178px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.div`
  margin-bottom: 4px;
`;

const Contents = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  gap: 0 28px;
`;

const Category = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CodyBox = styled.section`
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0px;
  border-radius: 12px;
  background-color: ${customColor.grayDark + '5'};
  box-shadow: 1px 1px 5px -1px ${customColor.white};
  overflow-y: auto;
  ::-webkit-scrollbar {
    opacity: 0;
    width: 26px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.grayDark};
    border-radius: 24px;
    background-clip: padding-box;
    border: 8px solid transparent;
  }
`;
