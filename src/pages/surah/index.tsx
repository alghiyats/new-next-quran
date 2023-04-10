import { GetStaticProps } from 'next';
import List from '../../components/List';
import { getSurah } from '../../lib/getSurah';
import Head from 'next/head';
import { useState } from 'react';
import ByJuz from '../../components/ByJuz';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Chapter } from '../../interfaces/Chapter';
import AcDc from '../../components/AcDc';
import CardTitle from '../../components/CardTitle';

type Props = {
   listSurah: Chapter[];
   errors?: string;
   isLoading: boolean;
};

export default function SurahList({ listSurah, errors, isLoading }: Props) {
   const [selectedTab, setSelectedTab] = useState(0);
   const [sortOrder, setSortOrder] = useState('asc');

   const handleSortOrderChange = () => {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
   };
   const handleSelect = index => {
      setSelectedTab(index);
   };
   return (
      <>
         <Head>
            <title>Daftar Surah - Next Quran</title>
         </Head>

         <CardTitle title={'Daftar Surah'} />

         {errors && (
            <>
               <Head>
                  <title>Error - Next Quran</title>
               </Head>
               <p>
                  <span style={{ color: 'red' }}>Error:</span> {errors}
               </p>
            </>
         )}

         {isLoading && <div>Loading...</div>}

         {!isLoading && !listSurah && <div>No data available</div>}

         {!isLoading && listSurah && (
            <Tabs onSelect={handleSelect}>
               <div className='flex justify-between gap-y-4 my-4'>
                  <TabList className='flex gap-x-2 bg-secondary dark:bg-darkSecondary p-2 rounded-xl shadow-[0_5px_35px_rgba(0,0,0,.07)] text-center'>
                     <Tab
                        className={`${
                           selectedTab === 0 ? 'bg-lightBg dark:bg-darkBg ' : ''
                        }p-2 rounded-md font-semibold cursor-pointer w-16`}>
                        Surah
                     </Tab>
                     <Tab
                        className={`${
                           selectedTab === 1 ? 'bg-lightBg dark:bg-darkBg ' : ''
                        }p-2 rounded-md font-semibold cursor-pointer w-16`}>
                        Juz
                     </Tab>
                  </TabList>
                  <AcDc
                     handleSortOrderChange={handleSortOrderChange}
                     sortOrder={sortOrder}
                  />
               </div>

               <TabPanel>
                  <List
                     surahList={listSurah}
                     sortOrder={sortOrder}
                  />
               </TabPanel>
               <TabPanel>
                  <ByJuz
                     surahList={listSurah}
                     sortOrder={sortOrder}
                  />
               </TabPanel>
            </Tabs>
         )}
      </>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   try {
      const listSurah: Chapter[] = await getSurah();
      return { props: { listSurah, isLoading: false } };
   } catch (err: any) {
      return { props: { errors: err.message, isLoading: false } };
   }
};
