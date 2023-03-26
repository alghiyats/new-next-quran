import Link from 'next/link';
import React, { useState } from 'react';
import { Data } from '../lib/juz';
import Search from './Search';
import SurahItem from './SurahItem';

export default function ByJuz({ surahList }) {
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
   console.log(filteredJuz);

   return (
      <>
         <Search
            search={search}
            setSearch={setSearch}
            placeholder={'Cari Juz...'}
         />
         <ul className='columns-1 sm:columns-2 md:columns-3'>
            {filteredJuz.map(juz => (
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
                        <SurahItem
                           data={surah}
                           key={surah.number}
                        />
                     ))}
                  </ul>
               </li>
            ))}
         </ul>
      </>
   );
}