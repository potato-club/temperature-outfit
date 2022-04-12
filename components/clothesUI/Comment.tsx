import React from 'react';
import { TypoGraphy } from 'components/common';
import { color } from 'constants/color';

export const Comment: React.FC = () => {
  return (
    <>
      <TypoGraphy type="h1" fontWeight="bold" color={color.brandColor3}>
        Comment
      </TypoGraphy>
      <TypoGraphy type="h4">조금 쌀쌀했다.</TypoGraphy>
    </>
  );
};
