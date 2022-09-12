import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutContainer, Header } from 'components/common';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>날씨별 옷차림</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
