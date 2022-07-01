import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutContainer, Header } from 'components/common';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <Header />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </LayoutContainer>
  );
}

export default MyApp;
