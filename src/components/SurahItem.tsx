import React from 'react';
import { Chapter } from '../interfaces/Chapter';

type Props = {
   data: Chapter;
};

const SurahItem = ({ data }: Props) => {
   return (
      <div className='group pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
         <div className='flex items-center'>
            <div className='flex justify-center items-center w-8 h-8 dark:bg-darkBg bg-lightBg mr-4 rounded-md text-xs'>
               {data.number}
            </div>
            <div className='flex flex-col'>
               <p className='font-semibold group-hover:text-blue-500 dark:group-hover:text-emerald-500'>
                  {data.name.transliteration.id}
               </p>
               <p className='text-xs capitalize'>
                  {data.numberOfVerses} ayat - {data.revelation.id}
               </p>
            </div>
         </div>
         <div>
            <span
               className='font-arabic text-xl font-bold'
               dir='rtl'>
               {data.name.short}
            </span>
         </div>
      </div>
   );
};

export default SurahItem;
