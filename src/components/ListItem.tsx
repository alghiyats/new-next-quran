import React from 'react';
import Link from 'next/link';
import { listSurah } from '../interfaces';

type Props = {
   data: listSurah;
};

const ListItem = ({ data }: Props) => {
   return (
      <Link href={`/surah/${data.nama_latin.toLowerCase()}`}>
         <div className='group pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
            <div className='flex items-center'>
               <div className='flex justify-center items-center w-8 h-8 dark:bg-gray-700 bg-gray-100 mr-4 rounded-md text-xs'>
                  {data.nomor}
               </div>
               <div className='flex flex-col'>
                  <p className='font-semibold group-hover:text-blue-500 dark:group-hover:text-emerald-500'>
                     {data.nama_latin}
                  </p>
                  <p className='text-xs'>
                     {data.jumlah_ayat} ayat - {data.tempat_turun}
                  </p>
               </div>
            </div>
            <div>
               <span
                  className='font-arabic text-xl font-bold'
                  dir='rtl'>
                  {data.nama}
               </span>
            </div>
         </div>
      </Link>
   );
};

export default ListItem;
