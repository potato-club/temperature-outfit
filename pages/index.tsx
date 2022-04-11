import { LayoutContainer, DivBox } from 'components/common';
import type { NextPage } from 'next';
import { TopWidgets } from 'components/TopWidgets';

const Home: NextPage = () => {
  return (
    <LayoutContainer>
<<<<<<< Updated upstream
      <DivBox width={500} height={100}>
        이렇게 사용하면 됨
      </DivBox>
=======
      <Header />
      <DivBox width={500} height={100}></DivBox>
>>>>>>> Stashed changes
    </LayoutContainer>
  );
};

export default Home;
