import React from 'react';
import styled from '@emotion/styled';

export const LayoutContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-image: url('/test1.jpg');
  // test로 넣어둠
  // 이미지 public에 저장할지 asset에 저장할지 고민중
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
