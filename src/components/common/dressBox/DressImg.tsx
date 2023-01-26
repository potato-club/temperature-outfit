import imageLayout from 'constants/imageLayout';
import Image from 'next/image';
import React from 'react';
type Props = {
  url: string;
};
const DressImg = ({ url }: Props) => {
  return (
    <Image
      width={imageLayout.middleSquare}
      height={imageLayout.middleSquare}
      alt="clothes"
      src={url}
      style={{
        objectFit: 'cover',
        borderRadius: 'inherit',
      }}
    />
  );
};

export const MemoDressImg = React.memo(DressImg);
