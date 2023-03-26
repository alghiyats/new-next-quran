import { GetStaticProps } from 'next';
import List from '../../components/List';
import { getSurah } from '../../lib/getSurah';
import Head from 'next/head';
import Search from '../../components/Search';
import { useState } from 'react';
import ByJuz from '../../components/ByJuz';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Chapter } from '../../interfaces/Chapter';

type Props = {
   listSurah: Chapter[];
};

export default function SurahList({ listSurah }: Props) {
   const [search, setSearch] = useState('');
   const [selectedTab, setSelectedTab] = useState(0);

   const handleSelect = index => {
      setSelectedTab(index);
   };

   const filtered = listSurah.filter(item =>
      item.name.transliteration.id.toLowerCase().includes(search.toLowerCase())
   );

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

         <Tabs onSelect={handleSelect}>
            <TabList className='my-6 flex gap-2 bg-secondary dark:bg-darkSecondary p-3 rounded-xl shadow-[0_5px_35px_rgba(0,0,0,.07)]'>
               <Tab className='p-2 rounded-md font-semibold'>Surah</Tab>
               <Tab className='p-2 rounded-md font-semibold'>Juz</Tab>
            </TabList>

            <TabPanel>
               <Search
                  search={search}
                  setSearch={setSearch}
                  placeholder={'Cari Surah...'}
               />
               <List filtered={filtered} />
            </TabPanel>
            <TabPanel>
               <ByJuz surahList={listSurah} />
            </TabPanel>
         </Tabs>
      </>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   const listSurah: Chapter[] = await getSurah();
   return { props: { listSurah } };
};
