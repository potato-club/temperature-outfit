import { ClothesMain } from 'components/mainPage/clothesUI';
import Header from 'components/common/Header';
import {
  FirstWidget,
  SecondWidget,
  ThirdWidget,
  WidgetsContainer,
} from 'components/mainPage';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <WidgetsContainer>
        <FirstWidget />
        <SecondWidget />
        <ThirdWidget />
      </WidgetsContainer>
      <ClothesMain />
    </>
  );
};

export default Home;
