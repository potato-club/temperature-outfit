import React from 'react';
import styled from '@emotion/styled';
import { customColor } from 'constants/index';
import Image from 'next/image';

const dummyImageUrl = [
  '/codyDummy/cody1.jpg',
  '/codyDummy/cody2.jpg',
  '/codyDummy/cody3.jpg',
  '/codyDummy/cody4.png',
  '/codyDummy/cody5.jpg',
];

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
          {data.imageUrl !== null ? (
            <Image
              width={160}
              height={250}
              src={data.imageUrl}
              alt="cody"
              objectFit="fill"
            />
          ) : (
            <p>
              등록된 사진이 없음 <br />
              그래서 어칼지 고민 <br />
              현재는 null 일때 아무 이미지를
              <br />
              프론트에서 설정해서 보여주는 것<br />
              생각함
            </p>
          )}
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
`;
