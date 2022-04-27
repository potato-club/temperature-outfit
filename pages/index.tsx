import { DivBox, Header } from 'components/common';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <DivBox width={500} height={100}>
        이렇게 사용하면 됨
      </DivBox>
      
    </>
  );
};

export default Home;
