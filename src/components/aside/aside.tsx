import { useOpen } from '@/contexts/GlobalContext';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import Close from '../close';

export default function Aside({ dataAyah, dataSurah }: any) {
   const { open, setOpen } = useOpen();
   const [filteredSurah, setFilteredSurah] = useState<any[]>([]);
   const [filteredVerses, setFilteredVerses] = useState<any[]>([]);

   const handleSurahFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.toLowerCase();
      const filteredSurah = dataSurah.filter((surah: any) =>
         surah.name?.transliteration.id.toLowerCase().includes(value)
      );
      setFilteredSurah(filteredSurah);
   };

   const handleVerseFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.toLowerCase();
      const filteredVerses = dataAyah.verses
         .map(x => x)
         .filter((verse: any) => verse.number.inSurah.toString().includes(value));
      setFilteredVerses(filteredVerses);
   };

   const handleClick = useCallback((verse: string) => {
      const cardAyah = document.querySelector(`div[data-ayah="${verse}"]`);
      if (cardAyah) {
         cardAyah.scrollIntoView({ behavior: 'smooth' });
      }
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const divAyah = document.querySelectorAll('div[data-ayah]');

         divAyah.forEach(div => {
            const divRect = div.getBoundingClientRect();
            const divNumber = div.getAttribute('data-ayah');
            const listAyah = document.querySelector(`li[data-verse="${divNumber}"]`);

            if (divRect.top <= 90 && divRect.bottom + 29 >= 90) {
               if (listAyah) {
                  listAyah.classList.add('bg-transB');
                  listAyah.classList.add('dark:bg-darkB');
               }
            } else {
               if (listAyah) {
                  listAyah.classList.remove('bg-transB');
                  listAyah.classList.remove('dark:bg-darkB');
               }
            }
         });
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <>
         <aside
            className={clsx(
               'lg:max-w-[500px] lg:mx-auto mt-[50px] mb-0 lg:flex lg:flex-[0_0_calc(230px_+_25px)] lg:w-[calc(230px + 25px)] lg:m-0 lg:before:basis-[25px] lg:h-[calc(100vh_-_131px)] lg:sticky lg:top-[90px] lg:dark:top-[91px] sm:fixed sm:inset-x-0 sm:transition-all sm:duration-200 sm:ease-ease z-[4] sm:z-[15]',
               open ? 'sm:bottom-11' : 'sm:bottom-[-400px]'
            )}>
            <div className='px-4 pb-[40px] pt-4 bg-contentB shadow-[0_5px_35px_rgba(0,0,0,.1)] rounded-lg sm:rounded-b-none dark:bg-darkBs sm:h-[400px] flex flex-col items-center gap-5'>
               <div className='lg:hidden w-16 py-1 dark:bg-darkB rounded-xl bg-transB'></div>
               <div className='flex justify-between w-full h-full'>
                  <div className='w-[68%]'>
                     <form className='sticky mb-2'>
                        <input
                           className='w-full h-10 rounded-xl px-3 text-sm placeholder-[rgba(0,0,0,.5)] dark:placeholder-[rgba(255,255,255,.25)] bg-[#f6f6f6] hover:bg-transB focus:bg-transB dark:hover:bg-darkBa dark:bg-darkBa/60 dark:focus:bg-darkBa  focus:outline-0'
                           type='text'
                           placeholder='Surah'
                           onChange={handleSurahFilter}
                        />
                     </form>
                     <ul className='flex flex-col overflow-y-scroll overflow-x-hidden h-[calc(100%_-_40px)] gap-1 pt-2 scrollbar-thumb-transB dark:scrollbar-thumb-darkBa scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-transparent'>
                        {(filteredSurah.length > 0 ? filteredSurah : dataSurah)?.map((v: any) => (
                           <React.Fragment key={v.number}>
                              {dataAyah?.name?.transliteration.id === v.name?.transliteration.id ? (
                                 <li className='text-sm font-medium bg-transB dark:bg-darkB py-2 px-3 rounded-xl w-full'>
                                    {v.name.transliteration.id}
                                 </li>
                              ) : (
                                 <Link href={`/surah/${v.name?.transliteration.id.toLowerCase()}`}>
                                    <li className='text-sm font-medium hover:bg-transB dark:hover:bg-darkB rounded-xl py-2 px-3 w-full cursor-pointer'>
                                       <a>{v.name?.transliteration.id}</a>
                                    </li>
                                 </Link>
                              )}
                           </React.Fragment>
                        ))}
                     </ul>
                  </div>
                  <div className='w-[29%]'>
                     <form className='sticky mb-2'>
                        <input
                           className='w-full h-10 rounded-xl px-3 text-sm placeholder-[rgba(0,0,0,.5)] dark:placeholder-[rgba(255,255,255,.25)] bg-[#f6f6f6] hover:bg-transB focus:bg-transB dark:hover:bg-darkBa dark:bg-darkBa/60 dark:focus:bg-darkBa  focus:outline-0'
                           type='text'
                           placeholder='Verse'
                           onChange={handleVerseFilter}
                        />
                     </form>
                     <ul className='flex flex-col overflow-y-scroll overflow-x-hidden h-[calc(100%_-_40px)] gap-1 pt-2 scrollbar-thumb-transB dark:scrollbar-thumb-darkBa scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-transparent'>
                        {(filteredVerses.length > 0 ? filteredVerses : dataAyah?.verses)?.map(
                           (v: any) => (
                              <li
                                 onClick={() => handleClick(v.number.inSurah)}
                                 data-verse={v.number.inSurah}
                                 className='text-sm font-medium py-2 px-3 rounded-xl hover:bg-transB dark:hover:bg-darkB w-full text-center cursor-pointer'
                                 key={v.number.inSurah}>
                                 {v.number.inSurah}
                              </li>
                           )
                        )}
                     </ul>
                  </div>
               </div>
            </div>
         </aside>
         <Close
            onClick={() => setOpen(false)}
            customStyles={clsx(
               open ? 'opacity-100 visible z-[14]' : 'opacity-0 invisible',
               'lg:hidden sm:bg-[rgba(0,0,0,0.2)]'
            )}
         />
      </>
   );
}
