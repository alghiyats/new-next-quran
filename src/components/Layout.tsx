import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../layouts/Header';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <title>Next Quran</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
    <Header />
    <div className="max-w-[1000px] mx-auto px-6 my-6">{children}</div>
  </div>
);

export default Layout;
