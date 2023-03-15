import { GetStaticProps } from 'next';
import { listSurah } from '../../interfaces';
import List from '../../components/List';
import { getSurah } from '../../lib/getSurah';
import Head from 'next/head';

type Props = {
   listSurah: any;
};

export default function SurahList({ listSurah }: Props) {
   if (!listSurah) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <Head>
            <title>Daftar Surah - Next Quran</title>
         </Head>
         <h1 className='font-bold text-2xl text-center p-6 bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl'>
            Daftar Surah
         </h1>
         <List items={listSurah} />
      </>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   const listSurah: listSurah[] = await getSurah();
   return { props: { listSurah } };
};
