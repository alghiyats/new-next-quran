import React from 'react';
import Link from 'next/link';

import { Surah } from '../interfaces';

type Props = {
  data: Surah;
};

const ListItem = ({ data }: Props) => {
  return (
    <div className="h-24 bg-slate-100 p-6 flex">
      <Link href={`/surah/${data.name.transliteration.id.toLowerCase()}`}>
        <p className="font-semibold hover:text-sky-700">
          {data.name.transliteration.id}
        </p>
        <p>
          {data.numberOfVerses} | {data.revelation.id}
        </p>
      </Link>
    </div>
  );
};

export default ListItem;
