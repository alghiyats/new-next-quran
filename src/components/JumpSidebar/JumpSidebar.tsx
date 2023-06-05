import React, { useCallback, useEffect, useRef, useState } from 'react';
import ForClose from '../ForClose/ForClose';
import clsx from 'clsx';
import Toggle from './Toggle';
import Link from 'next/link';

export default function JumpSidebar({ dataAyah, dataSurah }: any) {
   const [isOpen, setIsOpen] = useState(false);
   const [filteredSurah, setFilteredSurah] = useState<any[]>([]);
   const [filteredVerses, setFilteredVerses] = useState<any[]>([]);
   const ulRef = useRef<HTMLUListElement>(null);

   useEffect(() => {
      const surahList = document.getElementById('surahList');
      const activeLi = surahList.querySelector('.active');

      if (activeLi) {
         const surahListRect = surahList.getBoundingClientRect();
         const activeLiRect = activeLi.getBoundingClientRect();
         const scrollY = activeLiRect.bottom - surahListRect.bottom;

         surahList.scrollTo({ top: scrollY, behavior: 'smooth' });
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
                  listAyah.classList.add('active');
               }
            } else {
               if (listAyah) {
                  listAyah.classList.remove('active');
               }
            }
         });

         const ulElement = ulRef.current;
         const activeItem = ulElement.querySelector('.active');

         if (activeItem) {
            const ulRect = ulElement.getBoundingClientRect();
            const activeItemRect = activeItem.getBoundingClientRect();

            if (activeItemRect.top < ulRect.top) {
               ulElement.scrollTop += activeItemRect.top - ulRect.top;
            }

            if (activeItemRect.bottom > ulRect.bottom) {
               ulElement.scrollTop += activeItemRect.bottom - ulRect.bottom;
            }
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   const onToggle = useCallback(() => {
      setIsOpen(prev => !prev);
   }, []);
   const onClose = useCallback(() => {
      setIsOpen(false);
   }, []);

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
   return (
      <div
         className={clsx(
            'transition-all duration-100 ease-ease h-full bottom-0 fixed block w-[280px] lg:z-[6]',
            isOpen ? 'right-0 z-10' : 'right-[-280px]'
         )}>
         <div className='w-full h-full relative bg-contentB dark:bg-darkB shadow-[0_5px_30px_0_rgba(0,0,0,.05)] z-[7] rounded-[12px_0_0_12px] sm:rounded--[20px] lg:before:content-[""] lg:before:border-l lg:before:border-solid lg:before:border-[#e6e6e6] lg:before:absolute lg:before:inset-y-0 lg:before:left-0 lg:before:z-[1] dark:lg:before:border-[rgba(255,255,255,0.15)]'>
            <div className='relative bg-inherit lg:sticky'>
               <Toggle
                  onToggle={onToggle}
                  isOpen={isOpen}
               />
               <div className='pt-16 sm:pb-16 pb-8 px-4 w-full h-[calc(100vh_-_60px)] scrollbar-thin'>
                  <div className='flex justify-between w-full h-full'>
                     <div className='w-[68%]'>
                        <form className='sticky mb-2'>
                           <input
                              className='w-full h-10 rounded-xl px-3 text-sm placeholder-[rgba(0,0,0,.5)] dark:placeholder-[rgba(255,255,255,.25)] bg-[#f6f6f6] hover:bg-transB focus:bg-transB dark:hover:bg-darkBa dark:bg-darkBa/60 dark:focus:bg-darkBa focus:outline-0'
                              type='text'
                              placeholder='Surah'
                              onChange={handleSurahFilter}
                           />
                        </form>
                        <ul
                           id='surahList'
                           className='flex flex-col overflow-y-scroll overflow-x-hidden h-full gap-1 pt-2 scrollbar-thumb-transB dark:scrollbar-thumb-darkBa scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-transparent'>
                           {(filteredSurah.length > 0 ? filteredSurah : dataSurah)?.map(
                              (v: any) => (
                                 <React.Fragment key={v.number}>
                                    {dataAyah?.name?.transliteration.id ===
                                    v.name?.transliteration.id ? (
                                       <li className='text-sm font-medium active py-2 px-3 rounded-xl w-full'>
                                          {v.name.transliteration.id}
                                       </li>
                                    ) : (
                                       <Link
                                          href={`/surah/${v.name?.transliteration.id.toLowerCase()}`}>
                                          <li className='text-sm font-medium hover:bg-transB dark:hover:bg-darkBs rounded-xl py-2 px-3 w-full cursor-pointer'>
                                             <a>{v.name?.transliteration.id}</a>
                                          </li>
                                       </Link>
                                    )}
                                 </React.Fragment>
                              )
                           )}
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
                        <ul
                           ref={ulRef}
                           className='flex flex-col overflow-y-scroll overflow-x-hidden h-full gap-1 pt-2 scrollbar-thumb-transB dark:scrollbar-thumb-darkBa scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-transparent'>
                           {(filteredVerses.length > 0 ? filteredVerses : dataAyah?.verses)?.map(
                              (v: any) => (
                                 <Link
                                    href={`${dataAyah?.name?.transliteration.id.toLowerCase()}?verse=${
                                       v.number.inSurah
                                    }`}>
                                    <a>
                                       <li
                                          data-verse={v.number.inSurah}
                                          className='text-sm font-medium py-2 px-3 rounded-xl hover:bg-transB dark:hover:bg-darkBs w-full text-center cursor-pointer'
                                          key={v.number.inSurah}>
                                          {v.number.inSurah}
                                       </li>
                                    </a>
                                 </Link>
                              )
                           )}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <ForClose
            onClick={onClose}
            customStyles={clsx(
               isOpen ? 'opacity-100 visible bg-[rgba(0,0,0,0.2)] z-[6]' : 'opacity-0 invisible'
            )}
         />
      </div>
   );
}
