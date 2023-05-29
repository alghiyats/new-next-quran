import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export default function CardSurah({ number, name, numberOfVerses, revelation }: any) {
   return (
      <div
         className={clsx(
            'bg-contentB shadow-[0_5px_35px_rgba(0,0,0,.1)] rounded-lg',
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
               <span>
                  <svg
                     className='w-5 h-5 dark:stroke-darkT fill-none hover:stroke-red-500 stroke-iconC hover:fill-red-500'
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'>
                     <g>
                        <path
                           d='M104.10836,259.25648a5.81417,5.81417,0,0,0-8.34755-1.41453.97717.97717,0,0,1-1.17546,0,5.81416,5.81416,0,0,0-8.34752,1.4145,6.84387,6.84387,0,0,0,.137,7.53223c1.93424,2.97966,5.59943,7.87617,8.79824,7.87617s6.864-4.89654,8.79823-7.87618A6.84388,6.84388,0,0,0,104.10836,259.25648Z'
                           transform='translate(-83.17308 -253.66485)'
                        />
                     </g>
                  </svg>
               </span>
            </div>
            <Link href={`/surah/${name.transliteration.id.toLowerCase()}`}>
               <a>
                  <div className='p-5 flex items-center gap-3'>
                     <div className='w-9 h-9 flex items-center justify-center rotate-45 border-2 border-linkC dark:border-darkU mr-2'>
                        <div className='flex items-center justify-center rotate-90 w-7 h-7 bg-linkC dark:bg-darkU'>
                           <span className='text-sm font-bold text-darkT rotate-[-135deg]'>
                              {number}
                           </span>
                        </div>
                     </div>
                     <div className='flex flex-col'>
                        <span className='font-bold text-base'>{name.transliteration.id}</span>
                        <span className='text-sm font-semibold'>{name.translation.id}</span>
                        <span className='text-sm font-semibold'>
                           {numberOfVerses} Ayat - {revelation.id}
                        </span>
                     </div>
                     <div
                        className={clsx('font-arabic text-4xl flex-auto')}
                        dir='rtl'>
                        {name.short}
                     </div>
                  </div>
               </a>
            </Link>
         </div>
      </div>
   );
}
