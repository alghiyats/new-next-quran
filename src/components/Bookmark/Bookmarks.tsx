import clsx from 'clsx';
import React from 'react';
import { useBookmarkContext } from '@/contexts/GlobalContext';
import ForClose from '../ForClose/ForClose';
import DeleteIcon from '@/icons/DeleteIcon';
import Link from 'next/link';

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
                  'overflow-y-scroll overflow-x-hidden w-full bg-contentB pt-14 pb-5 pl-5 pr-3 scrollbar-thumb-transB dark:scrollbar-thumb-darkBa scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-track-transparent',
                  'dark:bg-darkBs'
               )}>
               <div
                  className={clsx(
                     'flex bg-inherit absolute z-[2] px-2.5 py-0 top-0 inset-x-0',
                     'before:content-[attr(data-text)] before:text-sm before:grow before:text-[90%] before:opacity-70 before:z-[2] before:px-2.5 before:py-4'
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
               <div className='flex flex-col gap-2'>
                  {bookmarkSaved?.length > 0 ? (
                     bookmarkSaved?.map((bm: any, i: number) => (
                        <div className='flex items-center justify-between relative w-full border dark:lg:border-[rgba(255,255,255,0.15)] dark:lg:border-solid p-2 rounded-md'>
                           <Link
                              key={i}
                              href={`/surah/${bm?.name?.transliteration.id.toLowerCase()}?verse=${
                                 bm?.numberInSurah
                              }`}>
                              <a className='relative flex flex-col w-[inherit]'>
                                 <p className='font-semibold text-md'>
                                    {bm?.name?.transliteration.id}
                                 </p>
                                 <p className='font-medium text-xs'>Ayah {bm?.numberInSurah}</p>
                              </a>
                           </Link>
                           <span
                              onClick={() => handleRemoveBookmark(bm?.numberInQuran)}
                              className='hover:scale-125 ease-ease duration-100 transition-all w-8 h-8 flex justify-center items-center'>
                              <DeleteIcon />
                           </span>
                        </div>
                     ))
                  ) : (
                     <p>Tidak ada bookmark</p>
                  )}
               </div>
            </div>
         </div>
         <ForClose
            onClick={() => setOpenBookmarks(false)}
            customStyles={clsx(
               openBookmarks ? 'opacity-100 visible z-[3]' : 'opacity-0 invisible',
               'xs:backdrop-saturate-[180%] xs:backdrop-blur-[10px] xs:bg-[rgba(0,0,0,0.2)]'
            )}
         />
      </div>
   );
}
