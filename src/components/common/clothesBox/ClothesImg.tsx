import imageLayout from 'constants/imageLayout';
import Image from 'next/image';
import React from 'react';

type Props = {
  url: string;
};

export const ClothesImg = ({ url }: Props) => {
  return (
    <Image
      src={url}
      alt="clothes"
      width={imageLayout.square}
      height={imageLayout.square}
      style={{ objectFit: 'cover', borderRadius: 'inherit' }}
    />
  );
};
