import { LayoutContainer } from 'components/common';
import type { NextPage } from 'next';
import { TopWidgets } from 'components/TopWidgets';

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <TopWidgets />
    </LayoutContainer>
  );
};

export default Home;
