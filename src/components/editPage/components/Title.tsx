import React from 'react';
import styled from '@emotion/styled';
import { IoShirt } from 'react-icons/io5';
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
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-start;
  margin-bottom: 12px;
  width: max-content;
`;
const SubTitle = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 0 28px;
  width: max-content;
`;

const ClothesTitle = styled.section`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 60%;
  max-width: 800px;
  align-items: center;
  white-space: nowrap;
  width: max-content;
`;

const Icon = styled.div`
  margin-right: 6px;
  padding-bottom: 0px;
`;
const HighLight = styled.div`
  position: absolute;
  width: calc(100% - 30px);
  height: 20px;
  background-color: ${customColor.darkSky + '60'};
  top: 50%;
  left: 30px;
  transform: translate(0, calc(-50% - 3px)) skewX(-5deg);
  z-index: 0;
`;

export const MemoTitle = React.memo(Title);
