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
  type: 'submit' | 'reset' | 'button' | undefined;
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
  type,
}) => {
  return (
    <Button
      customType={customType}
      onClick={onClick}
      sidePadding={sidePadding}
      type={type}
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
  padding: ${(props) => `4px ${props.sidePadding}px 0px` || '4px 16px 0px'};
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
  white-space: nowrap;

  &:active {
    opacity: 1;
    box-shadow: 2px 3px 2px 0px #1118 inset;
  }
`;
