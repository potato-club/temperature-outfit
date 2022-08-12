import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { editDummyType } from 'dummy/newEditDummy';
export function Title({ average, max, min, day }: editDummyType) {
  
  const dayQuery = new Date(day);
  const month = dayQuery.getMonth();
  const date = dayQuery.getDate();
  
  return (
    <Container>
      <TypoGraphy type="Title" fontWeight="bold">
        {`${month + 1}월 ${date}일`} 코디
      </TypoGraphy>
      <SubTitle>
        <Temperatures>
          <TypoGraphy type="body1" fontWeight="bold">
            평균 온도 : {average}°C
            <br />
            최고 온도 : {max}°C
            <br />
            최저 온도 : {min}°C
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
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  justify-content: space-evenly;
  align-items: center;
`;
const SubTitle = styled.section`
  width: 100%;
  display: flex;
  gap: 0 28px;
`;

const Temperatures = styled.section`
  width: 60%;
  max-width: 800px;
`;
const ReviewTitle = styled.section`
  width: 40%;
  max-width: 350px;
  display: flex;
  align-items: flex-end;
`;
