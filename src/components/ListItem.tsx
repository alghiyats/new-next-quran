import React from 'react';
import Link from 'next/link';

import { Surah } from '../interfaces';

type Props = {
  data: Surah;
};

const ListItem = ({ data }: Props) => {
  return (
    <Link href={`/surah/${data.name.transliteration.id.toLowerCase()}`}>
      <div className="group pl-4 p-6 flex shadow-md hover:shadow-lg border dark:border-gray-500 duration-300 rounded-md dark:shadow-gray-500 justify-between dark:bg-slate-900 items-center">
        <div className="flex ">
          <div className="flex justify-center items-center w-8 h-8 dark:bg-gray-700 bg-gray-100 mr-4 rounded-md text-xs">
            {data.number}
          </div>
          <div className="flex flex-col">
            <p className="font-semibold group-hover:text-blue-500 dark:group-hover:text-emerald-500">
              {data.name.transliteration.id}
            </p>
            <p className="text-xs">
              {data.numberOfVerses} ayat - {data.revelation.id}
            </p>
          </div>
        </div>
        <div>
          <span className="text-right font-['Uthmani'] text-xl font-bold">
            {data.name.short}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
