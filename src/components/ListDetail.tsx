import * as React from 'react';

import { listSurah } from '../interfaces';

type ListDetailProps = {
  item: listSurah;
  arab: string;
  translation: string;
  ayat: number;
  handleLastRead: any;
  data: any;
};

const ListDetail = ({
  item,
  arab,
  translation,
  ayat,
  handleLastRead,
}: ListDetailProps) => {
  return (
    <div
      id={`${ayat}`}
      className="group scroll-mt-20 flex shadow-md hover:shadow-lg border dark:border-gray-500 duration-300 rounded-md dark:shadow-gray-500 justify-between dark:bg-slate-900 flex-col gap-y-2">
      <div className="px-4 py-2 gap-3 dark:bg-gray-700 bg-gray-100 flex items-center w-full justify-between">
        <div>
          <span className="text-sm">
            {item.nomor} : {ayat}
          </span>
        </div>
        <div className="flex items-center flex-row-reverse">
          <span className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <svg
              className="w-5 h-5 fill-gray-500 dark:fill-white"
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <g>
                <path d="M14,7c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1V7z" />
                <path d="M17,9h-2c-1.103,0-2-0.897-2-2V5c0-1.103,0.897-2,2-2h2c1.103,0,2,0.897,2,2v2C19,8.103,18.103,9,17,9z M17,7v1V7L17,7 L17,7z M15,5v2h1.997L17,5H15z" />
              </g>
              <g>
                <path d="M14,17c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1V17z" />
                <path d="M17,19h-2c-1.103,0-2-0.897-2-2v-2c0-1.103,0.897-2,2-2h2c1.103,0,2,0.897,2,2v2C19,18.103,18.103,19,17,19z M17,17v1V17 L17,17L17,17z M15,15v2h1.997L17,15H15z" />
              </g>
              <g>
                <path d="M14,27c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1V27z" />
                <path d="M17,29h-2c-1.103,0-2-0.897-2-2v-2c0-1.103,0.897-2,2-2h2c1.103,0,2,0.897,2,2v2C19,28.103,18.103,29,17,29z M17,27v1V27 L17,27L17,27z M15,25v2h1.997L17,25H15z" />
              </g>
            </svg>
          </span>
          <span
            onClick={() => handleLastRead(item, ayat)}
            className="w-6 h-6 flex items-center justify-center cursor-pointer">
            <svg
              className="w-5 h-5 stroke-gray-500 dark:stroke-white fill-none"
              viewBox="0 0 24 24">
              <g transform="translate(4.500000, 2.500000)">
                <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z" />
                <line
                  transform="translate(-4.500000, -2.500000)"
                  x1={12}
                  x2={12}
                  y1={6}
                  y2={12}
                />
                <line
                  transform="translate(-4.500000, -2.500000)"
                  x1={15}
                  x2={9}
                  y1={9}
                  y2={9}
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="m-6">
        <p className='mb-2 font-["Uthmani"] text-2xl text-right'>{arab}</p>
        <p className="text-sm">{translation}</p>
      </div>
    </div>
  );
};

export default ListDetail;
