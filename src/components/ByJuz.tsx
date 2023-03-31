import Link from 'next/link';
import React, { useState } from 'react';
import { juzData } from '../lib/juz';
import Search from './Search';
import SurahItem from './SurahItem';

export default function ByJuz({ surahList, sortOrder }) {
   const [search, setSearch] = useState('');

   const numberSurah = juzData.flatMap(v => v.surah.map(x => x.number));
   const filtered = surahList.filter(v => numberSurah.includes(v.number));
   const newData = juzData.map(juz => ({
      juzNumber: juz.juz_number,
      verseRange: juz.surah,
      filtered: filtered.filter(surah => juz.surah.some(s => s.number === surah.number)),
   }));
   const filteredJuz = newData.filter(item => item.juzNumber.toString().includes(search));
   const sortedSurahs = filteredJuz?.sort((a, b) => {
      if (sortOrder === 'asc') {
         return a.juzNumber - b.juzNumber;
      } else {
         return b.juzNumber - a.juzNumber;
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
                     key={juz.juzNumber}
                     className='dark:bg-darkBg bg-lightBg p-4 rounded-lg inline-block w-full mb-4'>
                     <Link href={`/juz/${juz.juzNumber}`}>
                        <h3 className='mb-4 font-bold hover:text-link dark:hover:text-darkLink'>
                           Juz {juz.juzNumber}
                        </h3>
                     </Link>
                     <ul className='flex flex-col gap-4'>
                        {juz.filtered.map(item => (
                           <Link
                              href={`/surah/${item?.name?.transliteration?.id.toLowerCase()}/${juz.verseRange.find(s => s.number === item.number).verses.start
                                 }-${juz.verseRange.find(s => s.number === item.number).verses.end
                                 }`}
                              key={item.number}>
                              <SurahItem data={item} />
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
