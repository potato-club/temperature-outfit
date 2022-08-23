import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutContainer, Header } from 'components/common';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <LayoutContainer>
          <Header />
          <Component {...pageProps} />
        </LayoutContainer>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
