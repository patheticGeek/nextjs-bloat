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
          <link rel='manifest' href='/static/manifest.json' />
          <meta name='theme-color' content='#db5945' />
          <meta name='description' content='A nextjs app base' />
          <link rel='icon' sizes='128x128' href='icon-128.png' />
          <link rel='apple-touch-icon' href='icon-256.png' />
          <link rel='apple-touch-startup-image' href='icon-512.png' />
          <script src='https://kit.fontawesome.com/107be81bdd.js' />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
