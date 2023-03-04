import * as React from 'react';
import ListItem from './ListItem';
import { Surah } from '../interfaces';

type Props = {
  items: Surah[];
};

const List = ({ items }: Props) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:grid-cols-2">
    {items.map((item) => (
      <ListItem key={item.number} data={item} />
    ))}
  </div>
);

export default List;
