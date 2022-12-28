import React from 'react';
import styled from '@emotion/styled';
import { IoShirt } from 'react-icons/io5';
import { AiFillPicture } from 'react-icons/ai';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
type Props = {
  day: string;
};

export function Title({ day }: Props) {
  const dayQuery = day ? new Date(day) : new Date();
  const month = dayQuery.getMonth() + 1;
  const date = dayQuery.getDate();

  return (
    <Container>
      <SubTitle>
        <ClothesTitle>
          <HighLight />
          <Icon>
            <IoShirt fontSize="24px" />
          </Icon>
          <TypoGraphy type="h1" fontWeight="bold">
            {`${month}월 ${date}일`} 코디
          </TypoGraphy>
        </ClothesTitle>
      </SubTitle>
    </Container>
  );
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;
const SubTitle = styled.section`
  width: 100%;
  display: flex;
  gap: 0 28px;
`;

const ClothesTitle = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 60%;
  max-width: 800px;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 6px;
  padding-bottom: 0px;
`;
const HighLight = styled.div`
  position: absolute;
  width: 112px;
  height: 20px;
  background-color: ${customColor.darkSky + '60'};
  top: 50%;
  left: 30px;
  transform: translate(0, calc(-50% - 3px)) skewX(-5deg);
  z-index: 0;
`;

export const MemoTitle = React.memo(Title);
