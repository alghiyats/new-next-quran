import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../layouts/Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Next Quran' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div className="max-w-[1280px] mx-auto px-6 mt-6">{children}</div>
  </div>
);

export default Layout;
