import React from 'react';
import clsx from 'clsx';

export default function SurahInfo({ name, revelation, numberOfVerses, preBismillah }: any) {
   return (
      <div className='bg-contentB shadow-[0_5px_35px_rgba(0,0,0,.1)] rounded-lg dark:bg-darkBs justify-center flex py-6'>
         <div className='flex flex-col gap-3 text-center'>
            <p className={clsx('font-arabic text-4xl')}>{name?.long}</p>
            <p className='font-bold text-xl'>
               {name?.transliteration.id} ( {name?.translation.id} )
            </p>
            <p className='font-medium'>
               {numberOfVerses} Ayah - {revelation?.id}
            </p>
            {preBismillah !== null && (
               <p
                  className={clsx('font-arabic text-4xl')}
                  dir='rtl'>
                  {preBismillah?.text.arab}
               </p>
            )}
         </div>
      </div>
   );
}
