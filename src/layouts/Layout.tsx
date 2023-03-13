import React, { ReactNode, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
   children?: ReactNode;
   title?: string;
};

const Layout = ({ children }: Props) => {
   const [headerLoaded, setHeaderLoaded] = useState(false);

   const handleHeaderLoad = () => {
      setHeaderLoaded(true);
   };

   return (
      <>
         <Header onLoad={handleHeaderLoad} />
         {headerLoaded && <div className='max-w-screen-xl mx-auto px-5 my-6'>{children}</div>}
         <Footer />
      </>
   );
};

export default Layout;
