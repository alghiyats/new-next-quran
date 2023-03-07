import Head from 'next/head';
import React, { ReactNode } from 'react';
import Header from '../layouts/Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Next Quran' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <div className="max-w-[1000px] mx-auto px-6 my-6">{children}</div>
  </>
);

export default Layout;
