import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import { Suggestions } from 'types/mainPage';
import { useRouter } from 'next/router';

const nullImage = '/codyDummy/Person_icon.png';

interface Props {
  suggestions: Suggestions[];
}

export function MainCody({ suggestions }: Props) {
  const router = useRouter();

  const moveToOutfitView = (id: string) => {
    router.push(`/outfitView/${id}`);
  };

  return (
    <Container>
      {suggestions.map((suggestion) => (
        <ImageWrapper key={suggestion.id}>
          <Image
            width={160}
            height={250}
            src={suggestion.imageUrl ?? nullImage}
            alt="cody"
            objectFit="fill"
            onClick={() => moveToOutfitView(suggestion.id)}
          />
        </ImageWrapper>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1178px;
`;

const ImageWrapper = styled.section`
  cursor: pointer;
  border: 2px solid ${customColor.gray};
  border-radius: 4px;
  background-color: ${customColor.white};
`;
