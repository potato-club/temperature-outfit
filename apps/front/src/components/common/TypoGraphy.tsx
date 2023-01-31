import React, { useMemo } from 'react';
import styled from '@emotion/styled';

type TypoGraphyProps = {
  type?:
    | 'Head'
    | 'Title'
    | 'Title2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'sm1'
    | 'sm2';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  fontHeight?: string;
  fontHidden?: boolean;
  children?: React.ReactNode;
};

type StyledTypoGraphyProps = {
  type:
    | '48'
    | '32'
    | '28'
    | '24'
    | '22'
    | '20'
    | '18'
    | '14'
    | '12'
    | '10'
    | '8'
    | '16';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  fontWeight?: string;
  fontHeight?: string;
  fontHidden?: boolean;
};

export const TypoGraphy: React.FC<TypoGraphyProps> = ({
  children,
  type,
  color,
  textAlign,
  fontWeight,
  fontHeight,
  fontHidden = false,
}) => {
  const changeTypeFontSize = useMemo(() => {
    switch (type) {
      case 'Head':
        return '48';
      case 'Title':
        return '32';
      case 'Title2':
        return '28';
      case 'h1':
        return '24';
      case 'h2':
        return '22';
      case 'h3':
        return '20';
      case 'h4':
        return '18';
      case 'body1':
        return '16';
      case 'body2':
        return '14';
      case 'sm1':
        return '10';
      case 'sm2':
        return '8';
      default:
        return '16';
    }
  }, [type]);

  return (
    <TypoGraphyText
      type={changeTypeFontSize}
      color={color || '#333333'}
      textAlign={textAlign || 'left'}
      fontWeight={fontWeight || 'normal'}
      fontHeight={fontHeight || 'normal'}
      fontHidden={fontHidden}>
      {children}
    </TypoGraphyText>
  );
};

const TypoGraphyText = styled.span<StyledTypoGraphyProps>`
  font-family: 'LeferiPoint-WhiteObliqueA';
  font-size: ${(props) => props.type}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  ${(props) =>
    props.fontHeight === 'normal' ? '' : `line-height: ${props.fontHeight};`}
  word-break: break-all;
  ${(props) =>
    props.fontHidden ? 'overflow: hidden;text-overflow: ellipsis;' : ''}
`;
