import React from 'react';
import styled from '@emotion/styled';
import { color } from 'constants/index';
import { TypoGraphy } from 'components/common';

export const EnrollButton: React.FC = () => {
  return (
    <Button>
      <TypoGraphy
        type="h1"
        color={color.brandColor5}
        fontWeight="bold"
        textAlign="center">
        오늘 옷 등록하기
      </TypoGraphy>
    </Button>
  );
};

// 밑으로 내리기(성공~!)
const Button = styled.button`
  width: 260px;
  height: 60px;
  margin-top: 28px; //(마진으로 내룠옹 헤헿)
  border-radius: 28px;
  border: 3px solid ${color.brandColor5};
  cursor: pointer;
`;
