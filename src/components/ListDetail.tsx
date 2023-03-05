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
    <h2 className="text-center">
      {user.preBismillah !== null ? user.preBismillah.text.arab : null}
    </h2>
    <div>
      <ul className="list-none">
        {user.verses.map((x) => (
          <li className="text-right font-['Uthmani'] text-2xl font-semibold ">
            {x.text.arab}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ListDetail;
