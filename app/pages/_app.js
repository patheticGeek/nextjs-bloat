import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import '../assets/index.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Nextjs bloat firebase</title>
          <script src='https://kit.fontawesome.com/107be81bdd.js' />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
