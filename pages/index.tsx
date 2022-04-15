import { LayoutContainer } from 'components/common';
import {
  FirstWidget,
  SecondWidget,
  ThirdWidget,
  WidgetsContainer,
} from 'components/mainPage';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <WidgetsContainer>
        <FirstWidget />
        <SecondWidget />
        <ThirdWidget />
      </WidgetsContainer>
    </LayoutContainer>
  );
};

export default Home;
