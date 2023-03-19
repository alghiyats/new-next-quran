import Head from 'next/head';
import React, { ReactNode, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
   children?: ReactNode;
   title?: string;
};

const Layout = ({ children }: Props) => {
   return (
      <><Head>
      <meta charSet='utf-8' />
      <meta
         name='viewport'
         content='initial-scale=1.0, width=device-width'
      />
      <link
         rel='shortcut icon'
         href='favicon.ico'
         type='image/x-icon'
      />
      <link
         rel='preconnect'
         href='https://fonts.googleapis.com'
      />
      <link
         rel='preconnect'
         href='https://fonts.gstatic.com'
      />
      <link
         href='https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Scheherazade+New:wght@400;700&display=swap'
         rel='stylesheet'
      />
   </Head>
         <Header />
         <div className='max-w-screen-xl mx-auto px-6 my-6 pt-20'>{children}</div>
         <Footer />
      </>
   );
};

export default Layout;
