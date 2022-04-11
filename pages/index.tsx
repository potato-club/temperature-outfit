import { LayoutContainer, DivBox } from 'components/common';
import type { NextPage } from 'next';
import { TopWidgets } from 'components/mainPage';

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <DivBox width={500} height={100}>
        이렇게 사용하면 됨
      </DivBox>
      <TopWidgets />
    </LayoutContainer>
  );
};

export default Home;
