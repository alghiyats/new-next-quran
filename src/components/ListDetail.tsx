import { useState, useEffect } from 'react';
import { listSurah } from '../interfaces';

type ListDetailProps = {
   item: listSurah;
   arab: string;
   translation: string;
   ayat: number;
   handleLastRead: any;
   data: any;
   latin: string;
   check: any;
   id: number;
   handleAddBookmark: any;
   handleRemoveBookmark: any;
   Tafsir: any;
};

const ListDetail = ({
   item,
   arab,
   translation,
   ayat,
   handleLastRead,
   latin,
   check,
   id,
   handleAddBookmark,
   handleRemoveBookmark,
   Tafsir,
}: ListDetailProps) => {
   const gh = w => {
      const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      const numberString = String(w);
      let result = '';

      for (let i = 0; i < numberString.length; i++) {
         const digit = parseInt(numberString[i]);
         result += arabicNumbers[digit];
      }

      return result;
   };

   const handleBookmarkClick = (item: any, number: number) => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const isSaved = bookmarks.some((bookmark: any) => bookmark.id === number);
      if (isSaved) {
         handleRemoveBookmark(number);
      } else {
         handleAddBookmark(item, number);
      }
   };

   const [bookmarkSaved, setBookmarkSaved] = useState<any>();

   useEffect(() => {
      const datas = JSON.parse(localStorage.getItem('bookmarks'));
      setBookmarkSaved(datas);

      const handleStorageChange = () => {
         const newData = JSON.parse(localStorage.getItem('bookmarks'));
         setBookmarkSaved(newData);
      };

      window.addEventListener('storage', handleStorageChange);

      const handleLastReadChange = () => {
         const newData = JSON.parse(localStorage.getItem('bookmarks'));
         setBookmarkSaved(newData);
      };

      window.addEventListener('bookmarks', handleLastReadChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
         window.removeEventListener('bookmarks', handleLastReadChange);
      };
   }, []);

   return (
      <div
         id={`${ayat}`}
         className='bg-secondary dark:bg-darkSecondary scroll-mt-20 flex shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between flex-col gap-y-2'>
         <div className='px-4 py-2 gap-3 dark:bg-darkBg bg-lightBg flex items-center w-full justify-between'>
            <div>
               <span className='text-sm'>{ayat}</span>
            </div>
            <div className='flex items-center flex-row-reverse gap-2'>
               <span
                  onClick={() => Tafsir(ayat)}
                  className='w-6 h-6 flex items-center justify-center cursor-pointer'>
                  <svg
                     className='w-5 h-5'
                     viewBox='0 0 24 24'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <g>
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                        <path
                           className='stroke-gray-500 dark:stroke-slate-200'
                           d='M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z'
                           stroke='#000000'
                           strokeWidth={2}
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                     </g>
                  </svg>
               </span>
               <span
                  onClick={() =>
                     check
                        ? check.ayat.map(m => m.id !== id && handleLastRead(item, ayat))
                        : handleLastRead(item, ayat)
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
                                      m.id === id
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
               <span
                  onClick={() => handleBookmarkClick(item, id)}
                  className='w-6 h-6 flex items-center justify-center cursor-pointer'>
                  <svg
                     className={`stroke-gray-500 dark:stroke-slate-200 w-5 h-5 fill-none`}
                     stroke='currentColor'
                     strokeWidth={1}
                     fill='none'
                     viewBox='0 0 24 24'>
                     <g transform='translate(4.500000, 2.500000)'>
                        <path d='M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z' />
                        {bookmarkSaved?.some(e => e.id === id) ? (
                           <line
                              className='svgC h'
                              transform='translate(-4.500000, -2.500000)'
                              x1={15}
                              x2={9}
                              y1={9}
                              y2={9}
                           />
                        ) : (
                           <>
                              <line
                                 className='svgC h'
                                 transform='translate(-4.500000, -2.500000)'
                                 x1={15}
                                 x2={9}
                                 y1={9}
                                 y2={9}
                              />
                              <line
                                 className='svgC v'
                                 transform='translate(-4.500000, -2.500000)'
                                 x1={12}
                                 x2={12}
                                 y1={6}
                                 y2={12}
                              />
                           </>
                        )}
                     </g>
                  </svg>
               </span>
            </div>
         </div>
         <div className='m-6'>
            <p
               className='my-4 font-arabic md:text-3xl text-2xl leading-[3.5rem_!important]'
               dir='rtl'>
               {arab}
               <span className='text-3xl md:text-4xl font-arabicNumber'>&nbsp;{gh(ayat)}</span>
            </p>
            <p
               className='text-sm font-semibold mb-2'
               dangerouslySetInnerHTML={{ __html: latin }}></p>
            <p className='text-sm'>{translation}</p>
         </div>
      </div>
   );
};

export default ListDetail;
