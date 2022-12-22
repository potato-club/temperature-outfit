import React from 'react';
import styled from '@emotion/styled';

export const LayoutContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  /* background-image: url('/winter/w3.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%; */
  background: linear-gradient(
      180deg,
      rgba(153, 182, 255, 0.5) 0%,
      rgba(37, 78, 213, 0.47716) 11.98%,
      rgba(37, 78, 213, 0.47716) 11.98%,
      rgba(97, 0, 255, 0.13) 42.19%,
      rgba(97, 0, 255, 0.13) 57.29%,
      rgba(97, 0, 255, 0.13) 64.06%
    ),
    #ffffff;
  min-height: 100vh;
  background: #b5e3fd;
  background: linear-gradient(#a2ddff, 75%, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;