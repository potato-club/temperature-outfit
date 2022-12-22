import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor, koreaToday } from 'constants/index';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { todayCodyApi } from 'api';
import { confirmModal } from 'utils/interactionModal';

export function RegisterBtn() {
  const router = useRouter();
  const { refetch } = useQuery(
    'haveTodayOutfit',
    () => todayCodyApi.getManyOutfit(koreaToday, koreaToday),
    {
      enabled: false,
      onSuccess: ({ data }) => {
        if (data.length === 0) {
          router.push({
            pathname: `/edit`,
            query: {
              day: koreaToday,
            },
          });
        } else if (data.length > 0) {
          const { id } = data[0];
          confirmModal(
            '이미 등록된 코디가 있습니다.',
            () => {
              router.push({
                pathname: `/outfitView/${id}`,
              });
            },
            '이동',
            '취소',
          );
        }
      },
    },
  );

  const onClick = () => {
    refetch();
  };

  return (
    <Container>
      <Wrapper onClick={onClick}>
        <TypoGraphy type="h4" color="#fff" fontWeight="bold">
          코디 등록
        </TypoGraphy>
      </Wrapper>
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1178px;
`;

const Wrapper = styled.section`
  display: flex;
  position: absolute;
  z-index: 10;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 50px;
  /* border: 2px solid #7b61ff; */
  border-radius: 10px;
  background-color: ${customColor.white};
  background-color: ${customColor.darkSky};
  box-shadow: 2px 3px 1px 0px #aaa;
  animation: changeBtnR 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #4978b6;
    animation: changeBtn 0.3s ease;
  }
  &:active {
    box-shadow: none;
    transform: translate(2px, 3px);
  }
`;
// const Wrapper2 = styled.section`
//   display: flex;
//   position: absolute;
//   align-items: center;
//   justify-content: center;
//   width: 120px;
//   height: 50px;
//   border-radius: 25px;
//   background-color: #6791c9;
//   transform: translate(0, 6px);
//   cursor: pointer;
// `;
