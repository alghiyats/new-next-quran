import clsx from 'clsx';
import React from 'react';
import BookmarkButton from '../bookmarks/bookmarkButton';

export default function CardAyah({ data, number, text, translation }: any) {
   return (
      <div
         data-ayah={number.inSurah}
         className={clsx(
            'bg-contentB shadow-[0_5px_35px_rgba(0,0,0,.1)] rounded-lg scroll-mt-[90px]',
            'dark:bg-darkBs'
         )}>
         <div className='flex flex-col'>
            <div className='px-5 py-2 border-b dark:lg:border-b-[rgba(255,255,255,0.15)] dark:lg:border-solid rounded-t-lg flex justify-between'>
               <span>
                  <svg
                     className='w-4 h-4 -rotate-90'
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 276.167 276.167'
                     fill='#989b9f'>
                     <path d='M33.144,2.471C15.336,2.471,0.85,16.958,0.85,34.765s14.48,32.293,32.294,32.293s32.294-14.486,32.294-32.293 S50.951,2.471,33.144,2.471z' />
                     <path d='M137.663,2.471c-17.807,0-32.294,14.487-32.294,32.294s14.487,32.293,32.294,32.293c17.808,0,32.297-14.486,32.297-32.293 S155.477,2.471,137.663,2.471z' />
                     <path d='M243.873,67.059c17.804,0,32.294-14.486,32.294-32.293S261.689,2.471,243.873,2.471s-32.294,14.487-32.294,32.294 S226.068,67.059,243.873,67.059z' />
                     <path d='M243.038,170.539c17.811,0,32.294-14.483,32.294-32.293c0-17.811-14.483-32.297-32.294-32.297 s-32.306,14.486-32.306,32.297C210.732,156.056,225.222,170.539,243.038,170.539z' />
                     <path d='M136.819,170.539c17.804,0,32.294-14.483,32.294-32.293c0-17.811-14.478-32.297-32.294-32.297 c-17.813,0-32.294,14.486-32.294,32.297C104.525,156.056,119.012,170.539,136.819,170.539z' />
                     <path d='M243.771,209.108c-17.804,0-32.294,14.483-32.294,32.294c0,17.804,14.49,32.293,32.294,32.293 c17.811,0,32.294-14.482,32.294-32.293S261.575,209.108,243.771,209.108z' />
                  </svg>
               </span>
               <BookmarkButton
                  item={data}
                  id={number.inQuran}
               />
            </div>
            <div className='p-5 flex flex-col gap-2'>
               <p
                  dir='rtl'
                  className={clsx('font-arabic text-4xl mb-2 leading-[60px]')}>
                  {text.arab} {number.inSurah.toLocaleString('ar-EG')}
               </p>
               <p className={clsx('font-transliteration')}>{text.transliteration.id}</p>
               <p className={clsx('font-translation')}>{translation.id}</p>
            </div>
         </div>
      </div>
   );
}
