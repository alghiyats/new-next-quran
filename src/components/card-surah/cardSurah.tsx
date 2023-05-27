import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export default function CardSurah({ number, name, numberOfVerses, revelation }: any) {
   return (
      <Link href={`/surah/${name.transliteration.id.toLowerCase()}`}>
         <a>
            <div
               className={clsx(
                  'bg-contentB shadow-[0_5px_35px_rgba(0,0,0,.1)] rounded-lg',
                  'dark:bg-darkBs'
               )}>
               <div className='flex flex-col'>
                  <div className='px-5 py-2 bg-[#f6f6f6] dark:bg-darkBa rounded-t-lg'>
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
                  </div>
                  <div className='p-5 flex items-center gap-4'>
                     <div className='w-9 h-9 flex items-center justify-center rotate-45 border-2 border-linkC dark:border-darkU mx-4'>
                        <div className='flex items-center justify-center rotate-90 w-7 h-7 border border-linkC dark:border-darkU'>
                           <span className='text-sm font-semibold rotate-[-135deg]'>{number}</span>
                        </div>
                     </div>
                     <div className='flex flex-col'>
                        <span className='font-semibold text-base'>{name.transliteration.id}</span>
                        <span className='text-sm'>{name.translation.id}</span>
                        <span className='text-sm'>
                           {numberOfVerses} Ayat - {revelation.id}
                        </span>
                     </div>
                     <div
                        className={clsx('font-arabic text-4xl flex-auto')}
                        dir='rtl'>
                        {name.short}
                     </div>
                  </div>
               </div>
            </div>
         </a>
      </Link>
   );
}
