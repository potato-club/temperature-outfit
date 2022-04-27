import React from 'react';
import { TypoGraphy } from 'components/common';
import { color } from 'constants/color';
import styled from '@emotion/styled';

export const Comment: React.FC = () => {
  return (
    <Div>
      <TypoGraphy type="Title" fontWeight="bold" color={color.brandColor3}>
        Comment
        <TypoGraphy type="h3">조금 쌀쌀했다.</TypoGraphy>
      </TypoGraphy>
    </Div>
  );
};

const Div = styled.div`
  margin-left: 160px;
  line-height: 1.5;
  flex: 1;
`;
