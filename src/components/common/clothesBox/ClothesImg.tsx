import imageLayout from 'constants/imageLayout';
import Image from 'next/image';
import React from 'react';
import { BiBorderRadius } from 'react-icons/bi';
type Props = {
  url: string;
};
const ClothesImg = ({ url }: Props) => {
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

export const MemoClothesImg = React.memo(ClothesImg);
