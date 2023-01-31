import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutContainer, Header } from 'components/common';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

// Todo : nextAuth 삭제할때 ts-ignore 삭제
// @ts-ignore
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient();
  const AnyComponent = Component as any;
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <RecoilRoot>
        <LayoutContainer>
          <Header />
          <AnyComponent {...pageProps} />
        </LayoutContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
