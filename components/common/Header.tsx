import React from 'react';
import styled from '@emotion/styled';
import { color } from 'constants/index';
import { TypoGraphy } from './index';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Div>
        <TypoGraphy color={color.white}>
          Write down today&apos;s outfit.
        </TypoGraphy>
        <ButtonBox>
          <Logo>달력</Logo>
          <Logo>옷걸이</Logo>
        </ButtonBox>
      </Div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${color.brandColor5};
  display: flex;
  justify-content: center;
  top: 0px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 1178px;
  height: 46px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
const Logo = styled.button`
  cursor: pointer;
`;
