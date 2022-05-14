import React from 'react';
import styled from '@emotion/styled';
import { color } from 'constants/index';
import Image from 'next/image';

const dummyImageUrl = [
  '/codyDummy/cody1.jpg',
  '/codyDummy/cody2.jpg',
  '/codyDummy/cody3.jpg',
  '/codyDummy/cody4.png',
  '/codyDummy/cody5.jpg',
];
export function MainCody() {
  return (
    <Container>
      {dummyImageUrl.map((data, index) => (
        <ImageWrapper key={index}>
          <Image
            width={160}
            height={250}
            src={data}
            alt="cody"
            objectFit="fill"
          />
        </ImageWrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1178px;
`;

const ImageWrapper = styled.div`
  border: 2px solid ${color.gray};
  border-radius: 4px;
`;
