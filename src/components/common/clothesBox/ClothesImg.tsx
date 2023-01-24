import Image from 'next/image';
import React from 'react';
type Props = {
  url: string;
};
const ClothesImg = ({ url }: Props) => {
  return (
    <Image
      src={url}
      alt="clothes"
      width={136}
      height={136}
      style={{ objectFit: 'cover' }}
    />
  );
};

export const MemoClothesImg = React.memo(ClothesImg);
