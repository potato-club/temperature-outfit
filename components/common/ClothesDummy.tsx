import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import React from 'react';
import { TypoGraphy } from "components/common";
type Props = {
  width?: number;
  height?: number;
  marginLR?: number;
}
export function ClothesDummy({width, height, marginLR}: Props) {
  return (
    <Container marginLR={marginLR} width={width} height={height}>
        <Image
          width={width || 120}
          height={height || 80}
          alt="clothes"
          src="/clothes/clothes1.jpg"
        />
        <ClothesName>
          <TypoGraphy type="sm1" color={customColor.brandColor2}>
            LMC 고래반팔
          </TypoGraphy>
        </ClothesName>
    </Container>
  );
}

type StyleProps = {
  marginLR? : number;
  width? : number;
  height? : number;
}

const Container = styled.div<StyleProps>`
  position: relative;
  display: flex;
  margin: ${(props) => props.marginLR && `0 ${props.marginLR}px`};
  border: 4px solid ${customColor.brandColor1};
  border-radius: 24px;
  overflow: hidden;
  max-width: ${({ width }) => (width ? width + 'px' : '120px')};
  max-height: ${({ height }) => (height ? height + 'px' : '80px')};
  min-width: ${({ width }) => (width ? width + 'px' : '120px')};
  min-height: ${({ height }) => (height ? height + 'px' : '80px')};
  /* background: linear-gradient(180deg, #292929 0%, rgba(196, 196, 196, 0) 100%); */
`;

const ClothesName = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`;