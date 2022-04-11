import React from 'react';
import styled from '@emotion/styled';
import { color } from 'constants/index';

type DivBoxProps = {
  width: number;
  height: number;
};
type StyledDivProps = {
  width: number;
  height: number;
};

export const DivBox: React.FC<DivBoxProps> = ({ children, width, height }) => {
  return (
    <Div width={width} height={height}>
      {children}
    </Div>
  );
};

export default DivBox;

const Div = styled.div<StyledDivProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${color.brandColor5};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${color.white};
  /* opacity: 0.7; */
`;
