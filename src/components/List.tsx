import * as React from 'react';
import ListItem from './ListItem';
import { listSurah } from '../interfaces';
import { useState } from 'react';

type Props = {
   items: listSurah[];
};

const List = ({ items }: Props) => {
   const [search, setSearch] = useState('');

   const filteredItems = items.filter(item =>
      item.nama_latin.toLowerCase().includes(search.toLowerCase())
   );

   return (
      <div>
         <div className='my-6 p-1'>
            <form>
               <input
                  type='search'
                  className='dark:bg-darkSecondary shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary w-full py-4 px-6 font-semibold'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder='🔍 Cari Surat ...'
               />
            </form>
         </div>
         <div className='grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2'>
            {filteredItems.map(item => (
               <ListItem
                  key={item.nomor}
                  data={item}
               />
            ))}
         </div>
      </div>
   );
};

export default List;
