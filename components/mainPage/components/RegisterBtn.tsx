import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { customColor } from 'constants/index';
import React from 'react';

export function RegisterBtn() {
  const onClick = () => {
    alert('버튼클릭');
  }
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
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1178px;
`;

const Wrapper = styled.div`
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
