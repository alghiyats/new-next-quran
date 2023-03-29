import Link from 'next/link';
import React, { useState } from 'react';
import { Data } from '../lib/juz';
import Search from './Search';
import SurahItem from './SurahItem';

export default function ByJuz({ surahList, sortOrder }) {
   const [search, setSearch] = useState('');

   const startIndex = Data.map(v => v.start.index);
   const endIndex = Data.map(v => v.end.index);
   const filtered = surahList.filter(
      v => v.number >= startIndex[0] && v.number <= endIndex[Data.length - 1]
   );
   const newData = Data.map((item, index) => ({
      index: item.index,
      filtered: filtered.filter(
         surah => surah.number >= startIndex[index] && surah.number <= endIndex[index]
      ),
   }));
   const filteredJuz = newData.filter(item => item.index.toString().includes(search));
   const sortedSurahs = filteredJuz?.sort((a, b) => {
      if (sortOrder === 'asc') {
         return a.index - b.index;
      } else {
         return b.index - a.index;
      }
   });
   return (
      <>
         <Search
            search={search}
            setSearch={setSearch}
            placeholder={'Cari Juz...'}
         />
         <ul className='columns-1 sm:columns-2 md:columns-3'>
            {sortedSurahs.length > 0 ? (
               sortedSurahs.map(juz => (
                  <li
                     key={juz.index}
                     className='dark:bg-darkBg bg-lightBg p-4 rounded-lg inline-block w-full mb-4'>
                     <Link href={`/juz/${juz.index}`}>
                        <h3 className='mb-4 font-bold hover:text-link dark:hover:text-darkLink'>
                           Juz {juz.index}
                        </h3>
                     </Link>
                     <ul className='flex flex-col gap-4'>
                        {juz.filtered.map(surah => (
                           <Link
                              href={`/surah/${surah.name.transliteration.id.toLowerCase()}`}
                              key={surah.number}>
                              <SurahItem data={surah} />
                           </Link>
                        ))}
                     </ul>
                  </li>
               ))
            ) : (
               <p>Juz tidak ada...</p>
            )}
         </ul>
      </>
   );
}
