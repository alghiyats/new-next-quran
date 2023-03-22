import * as React from 'react';
import SurahItem from './SurahItem';
import { listSurah } from '../interfaces';

type Props = {
   filtered: listSurah[];
};

const List = ({ filtered }: Props) => {
   return (
      <div>
         <div className='grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2'>
            {filtered.length > 0 ? (
               filtered.map(item => (
                  <SurahItem
                     key={item.nomor}
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
