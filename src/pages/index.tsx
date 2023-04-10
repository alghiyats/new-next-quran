import React from 'react';
import Head from 'next/head';
import Pinned from '../components/Pinned';
import CardTitle from '../components/CardTitle';

const Home = () => {

   return (
      <>
         <Head>
            <title>Next Quran</title>
         </Head>
         <Pinned />
      </>
   );
};
export default Home;
