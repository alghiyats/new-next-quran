import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class SpecialDocument extends Document {
  render() {
    return (
      <Html className='scroll-mt-36'>
        <Head>
          <title>Next Quran</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <body className="bg-white text-black dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SpecialDocument;
