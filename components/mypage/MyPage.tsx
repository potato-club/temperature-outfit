import React from 'react';
import styled from '@emotion/styled';
import { TypoGraphy } from 'components/common';
import { color } from 'constants/color';
import { GrLocation } from 'react-icons/Gr';

export const MyPage: React.FC = () => {
  return (
    <Container>
      <TypoGraphy type="h1" color={color.brandColor3} fontWeight="bold">
        아이유님
      </TypoGraphy>

      <LocationWrapper>
        <GrLocation size={32} />
        <TypoGraphy type="h3" fontWeight="bold">
          서울
        </TypoGraphy>
      </LocationWrapper>

      <TypoGraphy type="sm1">사는 지역을 입력해주세요</TypoGraphy>

      <Footer>
        <TypoGraphy type="body1" color={color.brandColor5} fontWeight="bold">
          로그아웃
        </TypoGraphy>
        <TypoGraphy type="body1" color={color.brandColor5} fontWeight="bold">
          회원탈퇴
        </TypoGraphy>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 176px;
  height: 154px;
  border: 2px solid;
  border-radius: 0 0 28px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Footer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-evenly;
`;
