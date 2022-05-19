import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import React from 'react';
import { TypoGraphy } from "components/common";
export function ClothesDummy() {
  return (
    <Container>
      <div>
        <Image
          width={120}
          height={80}
          alt="clothes"
          src="/clothes/clothes1.jpg"
        />
        <ClothesName>
          <TypoGraphy type="sm1" color={customColor.brandColor2}>
            LMC 고래반팔
          </TypoGraphy>
        </ClothesName>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${customColor.brandColor1};
  border-radius: 24px;
  overflow: hidden;
  /* background: linear-gradient(180deg, #292929 0%, rgba(196, 196, 196, 0) 100%); */
`;

const ClothesName = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`;