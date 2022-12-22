import styled from '@emotion/styled';
import React from 'react';

export const MoveToBtn: React.FC = () => {
  return (
    <Btn>
      <Context>이동하기</Context>
    </Btn>
  );
};

const Btn = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ffffff33;
  border: none;
  padding: 10px 16px;
  border-radius: 20px;
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-weight: bold;
  border: 2px solid #555;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 1px 0px #555;
  &:hover {
    background-color: #00000044;
    color: #fff;
    animation-timing-function: ease;
    animation-duration: 0.4s;
  }
  &:active {
    box-shadow: none;
    transform: translate(1px, 2px);
  }
`;
const Context = styled.span``;
