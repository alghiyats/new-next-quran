import React, { useEffect } from 'react';

export default function LastRead({ ayat, id, item, check, setCheck, setNewData, setIsModalOpen }) {
   const handleLastRead = (data: any, number_inQuran: number) => {
      const ayat = data?.verses?.filter(verse => verse.number.inQuran === number_inQuran);
      const { name, numberOfVerses, number } = data;
      const newData = {
         number_inQuran,
         number,
         name: name.transliteration.id,
         numberOfVerses,
         ayat,
      };

      const lastReadData = JSON.parse(localStorage.getItem('lastRead'));

      if (lastReadData) {
         setNewData(newData);
         setIsModalOpen(true);
      } else {
         localStorage.setItem('lastRead', JSON.stringify(newData));
         window.dispatchEvent(new Event('lastRead'));
      }
   };

   useEffect(() => {
      const datas = JSON.parse(localStorage.getItem('lastRead'));
      setCheck(datas);

      const handleStorageChange = () => {
         const newData = JSON.parse(localStorage.getItem('lastRead'));
         setCheck(newData);
      };

      window.addEventListener('storage', handleStorageChange);

      const handleLastReadChange = () => {
         const newData = JSON.parse(localStorage.getItem('lastRead'));
         setCheck(newData);
      };

      window.addEventListener('lastRead', handleLastReadChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
         window.removeEventListener('lastRead', handleLastReadChange);
      };
   }, []);
   return (
      <>
         <span
            onClick={() =>
               check
                  ? check?.ayat?.map(m => m.number.inQuran !== id && handleLastRead(item, id))
                  : handleLastRead(item, id)
            }
            className='w-6 h-6 flex items-center justify-center cursor-pointer'>
            <svg
               className='w-5 h-5'
               viewBox='0 0 24 24'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'>
               <g>
                  <path
                     className={`${
                        check
                           ? check?.ayat?.map(m =>
                                m.number.inQuran === id
                                   ? 'stroke-link dark:stroke-darkLink'
                                   : 'stroke-gray-500 dark:stroke-slate-200'
                             )
                           : 'stroke-gray-500 dark:stroke-slate-200'
                     }`}
                     d='M19 9.80001L20 8.00002L16 4.00002L7 9.00002L15 17L17 13.4M11 13L4 20'
                     stroke='#000000'
                     strokeWidth='1.5'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  />
               </g>
            </svg>
         </span>
      </>
   );
}
