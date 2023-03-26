import * as React from 'react';
import { Chapter } from '../interfaces/Chapter';
import SurahItem from './SurahItem';

type Props = {
   filtered: Chapter[];
};

const List = ({ filtered }: Props) => {
   return (
      <div>
         <div className='grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2'>
            {filtered.length > 0 ? (
               filtered.map(item => (
                  <SurahItem
                     key={item.number}
                     data={item}
                  />
               ))
            ) : (
               <p className='ml-2'>Surah tidak ditemukan ...</p>
            )}
         </div>
      </div>
   );
};

export default List;
