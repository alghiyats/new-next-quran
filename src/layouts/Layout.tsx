import React, { ReactNode } from 'react';
import Header from '../layouts/Header';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <div className="max-w-[1000px] mx-auto px-6 my-6">{children}</div>
  </>
);

export default Layout;
