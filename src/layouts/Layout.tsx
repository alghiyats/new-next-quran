import React, { ReactNode, useState } from 'react';
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
      {headerLoaded && (
        <div className='max-w-[1000px] mx-auto px-6 my-6'>{children}</div>
      )}
    </>
  );
};

export default Layout;
