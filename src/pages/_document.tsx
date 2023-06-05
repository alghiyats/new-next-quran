import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class SpecialDocument extends Document {
   render() {
      return (
         <Html className='scroll-smooth overflow-x-hidden'>
            <Head>
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
                  href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
                  rel='stylesheet'></link>
            </Head>
            <body className='antialiased relative bg-bodyB text-bodyC dark:bg-darkB dark:text-darkT scrollbar-thin scrollbar-thumb-contentB dark:scrollbar-track-darkB dark:scrollbar-thumb-darkBa scrollbar-thumb-rounded-md font-fontB font-medium'>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default SpecialDocument;
