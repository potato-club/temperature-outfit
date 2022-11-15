import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutContainer, Header } from 'components/common';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <RecoilRoot>
          <LayoutContainer>
            <Header />
            <Component {...pageProps} />
          </LayoutContainer>
        </RecoilRoot>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
