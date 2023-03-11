import React from 'react';
import Link from 'next/link';
import { listSurah } from '../interfaces';

type Props = {
  data: listSurah;
};

const ListItem = ({ data }: Props) => {
  return (
    <Link href={`/surah/${data.namaLatin.toLowerCase()}`}>
      <div className="group pl-4 p-6 flex shadow-md hover:shadow-xl border dark:border-gray-500 duration-300 rounded-md dark:shadow-gray-500 justify-between dark:bg-slate-900 items-center">
        <div className="flex ">
          <div className="flex justify-center items-center w-8 h-8 dark:bg-gray-700 bg-gray-100 mr-4 rounded-md text-xs">
            {data.nomor}
          </div>
          <div className="flex flex-col">
            <p className="font-semibold group-hover:text-blue-500 dark:group-hover:text-emerald-500">
              {data.namaLatin}
            </p>
            <p className="text-xs">
              {data.jumlahAyat} ayat - {data.tempatTurun}
            </p>
          </div>
        </div>
        <div>
          <span className="font-['Scheherazade_New'] text-xl font-bold" dir="rtl">
            {data.nama}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
