import * as React from 'react';

import { Surah } from '../interfaces';

type ListDetailProps = {
  item: Surah;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1 className="font-bold text-xl text-center mb-6">
      {user.name.transliteration.id}
    </h1>
    <div>
      <ul className="list-none">
        {user.verses.map((x) => (
          <li className="text-right">{x.text.arab}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ListDetail;
