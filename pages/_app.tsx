import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutContainer, Header } from 'components/common';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutContainer>
      <Header />
      <Component {...pageProps} />
    </LayoutContainer>
  );
}

export default MyApp;
