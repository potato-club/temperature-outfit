import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutContainer, Header } from 'components/common';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <Header />
      <Component {...pageProps} />
    </LayoutContainer>
  );
}

export default MyApp;
