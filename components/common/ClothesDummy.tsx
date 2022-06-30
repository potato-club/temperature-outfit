import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import React from 'react';
import { TypoGraphy } from 'components/common';
type Props = {
  name: string;
  url: string;
};
export function ClothesDummy({ name, url }: Props) {
  return (
    <Container>
      <Image width={120} height={80} alt="clothes" src={url} />
      <ClothesName>
        <TypoGraphy type="sm1" color={customColor.brandColor2}>
          {name}
        </TypoGraphy>
      </ClothesName>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  border: 4px solid ${customColor.brandColor1};
  border-radius: 24px;
  overflow: hidden;
  max-width: 120px;
  max-height: 120px;
  /* background: linear-gradient(180deg, #292929 0%, rgba(196, 196, 196, 0) 100%); */
`;

const ClothesName = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`;
