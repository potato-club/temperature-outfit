import { LayoutContainer, DivBox, ClothesMain } from 'components/common';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <DivBox width={600} height={300}>
      <ClothesMain />
    </DivBox>
  );
};

export default Home;
