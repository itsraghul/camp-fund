import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Script from 'next/script';
import Header from './Header';

const Layout = (props) => {
  return (
    <Container>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      <Script>
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
      </Script>

      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
