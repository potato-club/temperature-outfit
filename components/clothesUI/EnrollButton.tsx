import React from 'react';
import styled from '@emotion/styled';
import { color } from 'constants/index';
import { TypoGraphy } from './common/TypoGraphy';

export const EnrollButton: React.FC = () => {
  return (
    <Container>
      <Button>
        <TypoGraphy
          type="h1"
          color={color.brandColor5}
          fontWeight="bold"
          textAlign="center">
          오늘 옷 등록하기
        </TypoGraphy>
      </Button>
    </Container>
  );
};

export default EnrollButton;

const Container = styled.form``;

const Button = styled.button`
  width: 260px;
  height: 60px;
  border-radius: 28px;
  border: 3px solid ${color.brandColor5};
`;
