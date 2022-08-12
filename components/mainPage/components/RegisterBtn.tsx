import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import { useRouter } from 'next/router';
import React from 'react';

export function RegisterBtn() {
  const router = useRouter();
  const todayStr = new Date().toISOString().replace(/T.*$/, '');

  const onClick = () => {
    router.push({
      pathname: `/edit`,
      query: {
        day: todayStr,
      },
    });
  };

  return (
    <Container>
      <Wrapper onClick={() => onClick()}>
        <TypoGraphy type="h1" color="#7b61ff" fontWeight="bold">
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
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 60px;
  border: 3px solid #7b61ff;
  border-radius: 10px;
  background-color: ${customColor.white};
  cursor: pointer;
`;
