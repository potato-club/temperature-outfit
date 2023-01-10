import React, { useState } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  onClick?: () => void;
}
interface ButtonStyle {
  isHover: boolean;
  isActive?: boolean;
}

export const InitPhotoButton = (props: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <ButtonWrapper>
      <ButtonInner
        onClick={props.onClick}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
          setIsActive(false);
        }}
        onMouseDown={() => {
          setIsActive(true);
        }}
        onMouseUp={() => {
          setIsActive(false);
        }}>
        <ButtonDeco isHover={isHover} isActive={isActive} />
        <ButtonAsist1 isHover={isHover} />
        <ButtonAsist2 isHover={isHover} />
        <ButtonContent isHover={isHover}>기본 사진</ButtonContent>
      </ButtonInner>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.section`
  display: flex;
  position: absolute;
  right: 4px;
  bottom: 4px;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 32px;
  border: 1px solid #fff;
  border-radius: 4px;
`;
const ButtonInner = styled.button`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  border: 2px solid #555;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  font-family: 'LeferiPoint-WhiteObliqueA';
`;
const ButtonDeco = styled.div<ButtonStyle>`
  display: flex;
  position: absolute;
  width: 20px;
  height: 9px;
  background: #444;
  left: 4px;
  top: 0px;
  border-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #fff;
  transform: translate(0, calc(-100% - 2px));
  transition: height 0.2s ease;
  ${(props) => props.isHover && 'height:10px;'}
  ${(props) => props.isActive && 'height:4px;'}
`;
const ButtonContent = styled.div<ButtonStyle>`
  display: flex;
  flex-direction: row;
  position: absolute;
  font-size: ${(props) => (props.isHover ? '13px' : '12px')};
  font-weight: bold;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  margin-top: 4px;
  cursor: pointer;
  transition: font-size 0.2s ease;
`;
const ButtonAsist1 = styled.div<ButtonStyle>`
  display: flex;
  position: absolute;
  content: '';
  width: ${(props) =>
    props.isHover ? 'calc(100% - 22px)' : 'calc(100% - 16px)'};
  height: calc(100% + 4px);
  top: 50%;
  left: 50%;
  background: #fff;
  border: 2px solid #fff;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease;
`;
const ButtonAsist2 = styled.div<ButtonStyle>`
  display: flex;
  position: absolute;
  content: '';
  width: calc(100% + 4px);
  height: ${(props) =>
    props.isHover ? 'calc(100% - 18px)' : 'calc(100% - 14px)'};
  top: 50%;
  left: 50%;
  background: #fff;
  border: 2px solid #fff;
  transform: translate(-50%, -50%);
  transition: height 0.2s ease;
`;
