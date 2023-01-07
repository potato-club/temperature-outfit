import Image from 'next/image';
import React from 'react';
type Props = {
  url: string;
};
const ClothesImg = ({ url }: Props) => {
  return <Image width={126} height={200} alt="clothes" src={url} />;
};

export const MemoClothesImg = React.memo(ClothesImg);
