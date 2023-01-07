import React from 'react';
import { TypoGraphy } from 'components/common';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';

interface ButtonProps {
  name: string;
  buttonType: 'submit' | 'cancel';
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
}
interface ButtonStyle {
  buttonType: string;
}

export const PushButton = (props: ButtonProps) => {
  return (
    <ButtonWrapper>
      <ButtonShdow></ButtonShdow>
      <ButtonBody buttonType={props.buttonType}></ButtonBody>
      <Button
        type={props.type}
        buttonType={props.buttonType}
        onClick={props.onClick}>
        <TypoGraphy type="body1" color="white" fontWeight="bold">
          {props.name}
        </TypoGraphy>
      </Button>
    </ButtonWrapper>
  );
};
const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  width: 96px;
  height: 36px;
`;
const Button = styled.button<ButtonStyle>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: none;
  background: ${(props) => (props.buttonType === 'cancel' ? '#f77' : '#7cf')};
  border: 2px solid
    ${(props) => (props.buttonType === 'cancel' ? '#d66' : '#5ad')};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(25deg);
  white-space: nowrap;
  transition: top 0.1s ease;
  &:hover {
    top: calc(50% - 2px);
    transition: top 0.1s ease;
  }
  &:hover + span {
    top: 10px;
    transition: top 0.1s ease;
  }
  &:active {
    top: calc(50% + 4px);
    transition: top 0.1s ease;
  }
  &:active + span {
    top: 6px;
    transition: top 0.1s ease;
  }
`;

const ButtonBody = styled.div<ButtonStyle>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%, 0);
  background: ${(props) => (props.buttonType === 'cancel' ? '#d66' : '#5ad')};
  border-radius: 16px;
`;

const ButtonShdow = styled.span`
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: hsl(0deg 0% 0% / 0.18);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1), top 0.1s ease;
`;
