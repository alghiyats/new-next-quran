import * as React from 'react';

import { Surah } from '../interfaces';

type ListDetailProps = {
  item: Surah;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name.transliteration.id}</h1>
    {user.verses.map((x: any) => (
      <li>{x.text.arab}</li>
    ))}
    <p>ID: {user.number}</p>
  </div>
);

export default ListDetail;
