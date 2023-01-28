import React, { useState } from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from './index';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoFileTrayStackedSharp } from 'react-icons/io5';
import { IoPersonCircleOutline, IoPersonCircle } from 'react-icons/io5';
import Link from 'next/link';
import { MyPage } from 'components/mypage/MyPage';
import { useRouter } from 'next/router';

export const Header: React.FC = () => {
  const [myPageToggle, setMyPageToggle] = useState(false);

  const onClick = () => {
    setMyPageToggle((current) => !current);
  };

  const router = useRouter();

  return (
    <Wrapper>
      {router.pathname !== '/' && (
        <Div>
          <Link href="/main" passHref>
            <Logo>
              <TypoGraphy color={customColor.brandColor3} fontWeight={'bold'}>
                Write down today&apos;s outfit.
              </TypoGraphy>
            </Logo>
          </Link>
          <ButtonBox>
            <Link href="/calendar" passHref>
              <Logo>
                <FaRegCalendarAlt size="20px" />
              </Logo>
            </Link>
            <Link href="/closet" passHref>
              <Logo>
                <IoFileTrayStackedSharp size="20px" />
              </Logo>
            </Link>
            <Logo className="benchMark">
              {myPageToggle ? (
                <IoPersonCircle size="24px" onClick={onClick} />
              ) : (
                <IoPersonCircleOutline size="24px" onClick={onClick} />
              )}
            </Logo>
            <MyPageDiv>
              {myPageToggle ? <MyPage myPageToggle={myPageToggle} /> : null}
            </MyPageDiv>
          </ButtonBox>
        </Div>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  width: 100%;
  background-color: ${customColor.white};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  box-shadow: 0px 1px 10px -4px #bbb;
  z-index: 10;
`;

const Div = styled.article`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 1178px;
  height: 44px;
  align-items: center;
  padding: 4px 12px 0;
`;

const ButtonBox = styled.section`
  display: flex;
  gap: 24px;
  position: relative;
  align-items: center;
`;
const Logo = styled.button`
  cursor: pointer;
  color: ${customColor.brandColor3};
  border: none;
  background-color: transparent;
`;

const MyPageDiv = styled.section`
  position: absolute;
  right: 0%;
  top: 34px;
  transform: translate(0, 0);
`;
