import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';
import { Suggestions } from 'types/mainPage';
import { useRouter } from 'next/router';
import { SuggestionIMG } from 'components/common';

const nullImage = '/codyDummy/Person_icon.png';

interface Props {
  suggestions: Suggestions[];
}

export function MainCody({ suggestions }: Props) {
  const router = useRouter();
  console.log(suggestions);
  const moveToOutfitView = (id: string) => {
    router.push(`/outfitView/${id}`);
  };

  return (
    <Container>
      {suggestions.map((suggestion) => (
        <SuggestionIMG
          key={suggestion.id}
          width={180}
          height={320}
          src={suggestion.imageUrl ?? nullImage}
          alt="cody"
          rating={suggestion.rating}
          onClick={() => moveToOutfitView(suggestion.id)}
        />
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
