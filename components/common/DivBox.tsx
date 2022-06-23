import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

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

const Div = styled.section<StyledDivProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${customColor.brandColor5};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${customColor.white};
  background-color: rgba(255, 255, 255, 0.5);
`;
