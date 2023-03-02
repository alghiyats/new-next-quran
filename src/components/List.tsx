import * as React from 'react';
import ListItem from './ListItem';
import { Surah } from '../interfaces';

type Props = {
  items: Surah[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.number}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
