import React, { useState } from 'react';
import { Data } from '../lib/juz';
import Search from './Search';
import SurahItem from './SurahItem';

export default function ByJuz({ surahList }) {
   const [search, setSearch] = useState('');

   const startIndex = Data.map(v => v.start.index);
   const endIndex = Data.map(v => v.end.index);
   const filtered = surahList.filter(
      v => v.nomor >= startIndex[0] && v.nomor <= endIndex[Data.length - 1]
   );
   const newData = Data.map((item, index) => ({
      index: item.index,
      filtered: filtered.filter(
         surah => surah.nomor >= startIndex[index] && surah.nomor <= endIndex[index]
      ),
   }));
   const filteredJuz = newData.filter(item => item.index.toString().includes(search));

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
                  <h3 className='mb-4 font-bold'>Juz {juz.index}</h3>
                  <ul className='flex flex-col gap-4'>
                     {juz.filtered.map(surah => (
                        <SurahItem data={surah} />
                     ))}
                  </ul>
               </li>
            ))}
         </ul>
      </>
   );
}
