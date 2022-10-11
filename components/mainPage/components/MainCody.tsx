import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';

const nullImage = '/codyDummy/Person_icon.png';

interface Props {
  suggestions: Suggestions[];
}
interface Suggestions {
  id: string;
  imageUrl: string;
  rating: number;
  temperature: number;
}

export function MainCody({ suggestions }: Props) {
  return (
    <Container>
      {suggestions.map((data) => (
        <ImageWrapper key={data.id}>
          <Image
            width={160}
            height={250}
            src={data.imageUrl ?? nullImage}
            alt="cody"
            objectFit="fill"
          />
        </ImageWrapper>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1178px;
`;

const ImageWrapper = styled.section`
  border: 2px solid ${customColor.gray};
  border-radius: 4px;
  background-color: ${customColor.white};
`;
