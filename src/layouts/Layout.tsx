import React, { ReactNode, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
   children?: ReactNode;
   title?: string;
};

const Layout = ({ children }: Props) => {
   return (
      <>
         <Header />
         <div className='max-w-screen-xl mx-auto px-6 my-6 pt-20'>{children}</div>
         <Footer />
      </>
   );
};

export default Layout;
