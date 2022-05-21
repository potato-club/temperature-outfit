import React from 'react'
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';

export function Title() {
  return (
    <Container>
      <TypoGraphy type="Title" fontWeight="bold">
        O월O일 코디
      </TypoGraphy>
      <SubTitle>
        <Temperatures>
          <TypoGraphy type="body1" fontWeight="bold">
            평균 온도 : 15°C
            <br />
            최고 온도 : 17°C
            <br />
            최저 온도 : 13°C
          </TypoGraphy>
        </Temperatures>
        <ReviewTitle>
          <TypoGraphy type="Title" fontWeight="bold">
            사진 및 후기
          </TypoGraphy>
        </ReviewTitle>
      </SubTitle>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  justify-content: space-evenly;
  align-items: center;
`;
const SubTitle = styled.div`
  width: 100%;
  display: flex;
  gap: 0 28px;
`;

const Temperatures = styled.div`
  width: 60%;
  max-width: 800px;
`;
const ReviewTitle = styled.div`
  width: 40%;
  max-width: 350px;
  display: flex;
  align-items: flex-end;
`;
