import * as React from 'react';
import ListItem from './ListItem';
import { listSurah } from '../interfaces';

type Props = {
   items: listSurah[];
};

const List = ({ items }: Props) => (
   <div className='grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2'>
      {items.map(item => (
         <ListItem
            key={item.nomor}
            data={item}
         />
      ))}
   </div>
);

export default List;
