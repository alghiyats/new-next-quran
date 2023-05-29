'use client';

import clsx from 'clsx';
import React from 'react';
import Close from '../close';
import IconSVG from '../layouts/header/iconSVG';
import { useBookmarkContext } from '@/contexts/GlobalContext';

export default function Bookmarks({ openBookmarks, setOpenBookmarks }: any) {
   const { handleRemoveBookmark, bookmarkSaved } = useBookmarkContext();
   return (
      <div>
         <div
            className={clsx(
               'bg-contentB shadow-[0_10px_25px_-3px_rgba(0,0,0,0.1)] flex max-h-[400px] overflow-hidden absolute top-[-5px] transition-all duration-4 ease-ease w-[375px] z-[4] rounded-[16px_5px_16px_16px] right-0',
               'bg-darkBs',
               'xs:max-h-[calc(100%_-_60px)] xs:fixed xs:w-full xs:rounded-[12px_12px_0_0] xs:top-auto xs:-bottom-full xs:inset-x-0',
               openBookmarks
                  ? 'opacity-100 visible xs:bottom-12 xs:top-auto'
                  : 'opacity-0 top-0 invisible'
            )}>
            <div
               className={clsx(
                  'overflow-y-scroll overflow-x-hidden w-full bg-contentB pt-[60px] pb-5 px-5 scrollbar-thumb-transB dark:scrollbar-thumb-darkBa scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-transparent',
                  'dark:bg-darkBs'
               )}>
               <div
                  className={clsx(
                     'flex bg-inherit absolute z-[2] px-2.5 py-0 top-0 inset-x-0',
                     'before:content-[attr(data-text)] before:grow before:text-[90%] before:opacity-70 before:z-[2] before:px-2.5 before:py-4'
                  )}
                  data-text='Bookmark Posts'>
                  <span
                     onClick={() => setOpenBookmarks(false)}
                     aria-label='Close'
                     className={clsx(
                        '',
                        'flex items-center justify-end relative shrink-0 min-w-[40px] px-2.5 py-0',
                        'before:content-[attr(aria-label)] before:text-[11px] before:opacity-60 before:mx-2',
                        'after:content-["✕"] after:leading-[18px] after:text-sm'
                     )}
                  />
               </div>
               <div className='flex flex-col gap-4'>
                  {bookmarkSaved?.length > 0 ? (
                     bookmarkSaved?.map((bm: any, i: number) => (
                        <div
                           key={i}
                           className='flex items-center relative w-full'>
                           <div className='w-10 h-10 flex justify-center items-center rounded-xl relative overflow-hidden bg-transB text-xl font-semibold'>
                              {bm?.numberSurah}
                           </div>
                           <div className='px-3 relative w-[calc(100%_-_56px)] flex flex-col'>
                              <p className='font-semibold text-md'>
                                 {bm?.name?.transliteration.id}
                              </p>
                              <p className='font-medium text-xs'>Ayah {bm?.numberInSurah}</p>
                           </div>
                           <IconSVG
                              onClick={() => handleRemoveBookmark(bm?.numberInQuran)}
                              customStyle='w-5 h-5'>
                              <g transform='translate(3.500000, 2.000000)'>
                                 <path d='M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524'></path>
                                 <line
                                    x1='16.8651429'
                                    y1='4.47980952'
                                    x2='0.714666667'
                                    y2='4.47980952'></line>
                                 <path d='M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952'></path>
                              </g>
                           </IconSVG>
                        </div>
                     ))
                  ) : (
                     <p>Tidak ada bookmark</p>
                  )}
               </div>
            </div>
         </div>
         <Close
            onClick={() => setOpenBookmarks(false)}
            customStyles={clsx(
               openBookmarks ? 'opacity-100 visible z-[3]' : 'opacity-0 invisible',
               'xs:backdrop-saturate-[180%] xs:backdrop-blur-[10px] xs:bg-[rgba(0,0,0,0.2)]'
            )}
         />
      </div>
   );
}
