import Image from 'next/image';
import React from 'react';
type Props = {
  url: string;
};
const DressImg = ({ url }: Props) => {
  return <Image width={126} height={200} alt="clothes" src={url} />;
};

export const MemoDressImg = React.memo(DressImg);
