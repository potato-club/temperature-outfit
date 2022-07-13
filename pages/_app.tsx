import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutContainer, Header } from 'components/common';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* <LayoutContainer> */}
      <Header />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      {/* </LayoutContainer> */}
    </SessionProvider>
  );
}

export default MyApp;
