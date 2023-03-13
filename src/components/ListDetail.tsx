import * as React from 'react';

import { listSurah } from '../interfaces';
import BookmarkIcon from './BookmarkIcon';

type ListDetailProps = {
   item: listSurah;
   arab: string;
   translation: string;
   ayat: number;
   handleLastRead: any;
   data: any;
   latin: string;
   check: any;
   id: number;
};

const ListDetail = ({
   item,
   arab,
   translation,
   ayat,
   handleLastRead,
   latin,
   check,
   id,
}: ListDetailProps) => {
   const gh = w => {
      let ar = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      let nm = `${w}`;
      let result = '';
      for (let c of nm) {
         result += ar[parseInt(c)];
      }
      return result;
   };

   return (
      <div
         id={`${ayat}`}
         className='group bg-[#fffdfc] scroll-mt-20 flex shadow-[0_5px_35px_rgba(0,0,0,.07)] hover:shadow-lg border dark:border-gray-500 duration-300 rounded-md dark:shadow-gray-500 justify-between dark:bg-slate-900 flex-col gap-y-2'>
         <div className='px-4 py-2 gap-3 dark:bg-gray-700 bg-slate-200 flex items-center w-full justify-between'>
            <div>
               <span className='text-sm'>{ayat}</span>
            </div>
            <div className='flex items-center flex-row-reverse gap-2'>
               <span className='w-6 h-6 flex items-center justify-center cursor-pointer'>
                  <svg
                     className='w-5 h-5'
                     viewBox='0 0 24 24'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <g>
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                     </g>
                  </svg>
               </span>
               <span
                  onClick={() =>
                     check
                        ? check.ayat.map(m => m.id !== id && handleLastRead(item, ayat))
                        : handleLastRead(item, ayat)
                  }
                  className='w-6 h-6 flex items-center justify-center cursor-pointer'>
                  <svg
                     className='w-5 h-5'
                     viewBox='0 0 24 24'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <g>
                        <path
                           className={`${check?.ayat?.map(
                              m => m.id === id && 'stroke-sky-500 '
                           )}stroke-gray-500 dark:stroke-slate-200`}
                           d='M19 9.80001L20 8.00002L16 4.00002L7 9.00002L15 17L17 13.4M11 13L4 20'
                           stroke='#000000'
                           strokeWidth='1.5'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                     </g>
                  </svg>
               </span>
               <BookmarkIcon favId={id} />
            </div>
         </div>
         <div className='m-6'>
            <p
               className='my-4 font-["Scheherazade_New"] md:text-3xl text-2xl leading-[3.5rem_!important]'
               dir='rtl'>
               {arab}
               <span className='font-["Uthmani"] text-3xl md:text-4xl'>&nbsp;{gh(ayat)}</span>
            </p>
            <p
               className='text-sm font-semibold mb-2'
               dangerouslySetInnerHTML={{ __html: latin }}></p>
            <p className='text-sm'>{translation}</p>
         </div>
      </div>
   );
};

export default ListDetail;
