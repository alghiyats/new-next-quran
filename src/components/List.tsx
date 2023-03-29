import Link from 'next/link';
import * as React from 'react';
import { Chapter } from '../interfaces/Chapter';
import Search from './Search';
import SurahItem from './SurahItem';

type Props = {
   surahList: Chapter[];
   sortOrder: string;
};

const List = ({ surahList, sortOrder }: Props) => {
   const [search, setSearch] = React.useState('');

   const filtered = surahList.filter(item =>
      item.name.transliteration.id.toLowerCase().includes(search.toLowerCase())
   );
   const sortedSurahs = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
         return a.number - b.number;
      } else {
         return b.number - a.number;
      }
   });
   return (
      <>
         <Search
            search={search}
            setSearch={setSearch}
            placeholder={'Cari Surah...'}
         />
         <div className='grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2'>
            {sortedSurahs.length > 0 ? (
               sortedSurahs.map(item => (
                  <Link
                     href={`/surah/${item.name.transliteration.id.toLowerCase()}`}
                     key={item.number}>
                     <SurahItem data={item} />
                  </Link>
               ))
            ) : (
               <p className='ml-2'>Surah tidak ditemukan ...</p>
            )}
         </div>
      </>
   );
};

export default List;
