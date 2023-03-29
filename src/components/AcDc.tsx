import React from 'react';

export default function AcDc({ handleSortOrderChange, sortOrder }) {
   return (
      <div
         onClick={handleSortOrderChange}
         className={`w-36 flex justify-end bg-secondary dark:bg-darkSecondary p-2 rounded-xl shadow-[0_5px_35px_rgba(0,0,0,.07)] cursor-pointer`}>
         <div className='mx-auto flex items-center gap-1'>
            <span
               className={`${
                  sortOrder === 'asc' ? 'rotate-180 ' : ''
               }duration-300 transition-all w-6 h-6 flex items-center justify-center`}>
               <svg
                  className='fill-gray-500 dark:fill-slate-200 h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g>
                     <path d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.06 11.17L12.53 14.7C12.38 14.85 12.19 14.92 12 14.92C11.81 14.92 11.62 14.85 11.47 14.7L7.94 11.17C7.65 10.88 7.65 10.4 7.94 10.11C8.23 9.82 8.71 9.82 9 10.11L12 13.11L15 10.11C15.29 9.82 15.77 9.82 16.06 10.11C16.35 10.4 16.35 10.87 16.06 11.17Z'></path>
                  </g>
               </svg>
            </span>
            <span className='text-base font-semibold'>
               {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
            </span>
         </div>
      </div>
   );
}
