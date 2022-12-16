import Image from 'next/image';
import React from 'react';
type Props = {
  url: string;
  type: 'edit' | 'closet';
};
const ClothesImg = ({ url, type }: Props) => {
  return (
    <Image
      width={120}
      height={type === 'edit' ? 80 : 120}
      alt="clothes"
      src={url}
    />
  );
};

export const MemoClothesImg = React.memo(ClothesImg);
