import React from 'react';
import Link from 'next/link';

import { Surah } from '../interfaces';

type Props = {
  data: Surah;
};

const ListItem = ({ data }: Props) => {
  return (
    <div className="h-24 p-6 flex flex-col shadow-md rounded-md dark:shadow-slate-500">
      <Link href={`/surah/${data.name.transliteration.id.toLowerCase()}`}>
        <p className="font-semibold hover:text-sky-700">
          {data.name.transliteration.id}
        </p>
      </Link>
      <p>
        {data.numberOfVerses} - {data.revelation.id}
      </p>
    </div>
  );
};

export default ListItem;
