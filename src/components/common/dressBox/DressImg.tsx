import Image from 'next/image';
import React from 'react';
type Props = {
  url: string;
};
const DressImg = ({ url }: Props) => {
  return <Image width={200} height={126} alt="clothes" src={url} />;
};

export const MemoDressImg = React.memo(DressImg);
