import React from 'react';

export default function AcDc({ handleSortOrderChange, sortOrder }) {
   return (
      <div className='flex justify-end bg-secondary dark:bg-darkSecondary p-2 rounded-xl shadow-[0_5px_35px_rgba(0,0,0,.07)]'>
         <button
            onClick={handleSortOrderChange}
            className='p-2 bg-lightBg w-24 rounded-lg text-sm'>
            {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
         </button>
      </div>
   );
}
