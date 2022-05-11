import React from 'react';
import styled from '@emotion/styled';
import { color } from 'constants/index';
import { TypoGraphy } from './index';
import { MyPage } from 'components/mypage';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoFileTrayStackedSharp } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Div>
        <TypoGraphy color={color.white}>
          Write down today&apos;s outfit.
        </TypoGraphy>
        <ButtonBox>
          <Logo>
            <FaRegCalendarAlt size="20px" />
          </Logo>
          <Logo>
            <IoFileTrayStackedSharp size="20px" />
          </Logo>
          <Logo>
            <CgProfile size="20px" />
          </Logo>
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
  position: absolute;
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
  gap: 16px;
`;
const Logo = styled.div`
  cursor: pointer;
  color: ${color.white};
`;
