import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import { TypoGraphy } from 'components/common';

type ButtonProps = {
  customType: 'white' | 'colorful';
  text: string;
  sidePadding?: string;
  height?: number;
  onClick?: () => void;
};

type ButtonStyledProps = {
  customType: 'white' | 'colorful';
  backGroundColor?: string;
  sidePadding?: string;
  height?: number;
};

export const CustomButton: React.FC<ButtonProps> = ({
  customType,
  text,
  onClick,
  sidePadding,
  height,
}) => {
  return (
    <Button
      customType={customType}
      onClick={onClick}
      sidePadding={sidePadding}
      height={height}>
      <TypoGraphy
        color={customType === 'white' ? customColor.black : customColor.white}
        fontWeight={'bold'}>
        {text}
      </TypoGraphy>
    </Button>
  );
};

const Button = styled.button<ButtonStyledProps>`
  padding: ${(props) => `0px ${props.sidePadding}px` || '0px 16px'};
  height: ${(props) => props.height || '40'}px;
  background-color: ${(props) =>
    props.customType === 'white' ? customColor.white : customColor.brandColor3};
  cursor: pointer;
  border-radius: 100px;
  border: ${(props) =>
    props.customType === 'white' ? `1px solid ${customColor.gray}` : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 500ms ease-in;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.9;
  }
`;
