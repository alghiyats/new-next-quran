import React from 'react';

export default function HeaderTitle({ title }: { title: string }) {
   return (
      <div className={'w-[calc(100%_-_30px)] pl-[5px]'}>
         <h1 className='block text-inherit text-headerT font-bold'>
            <span className='overflow-hidden whitespace-nowrap text-ellipsis block select-none'>
               {title}
            </span>
         </h1>
      </div>
   );
}
