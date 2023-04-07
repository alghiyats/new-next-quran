import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class SpecialDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
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
            </Head>
            <body
               id='body'
               className="bg-primary text-black dark:bg-darkPrimary dark:text-white font-montserrat">
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default SpecialDocument;
