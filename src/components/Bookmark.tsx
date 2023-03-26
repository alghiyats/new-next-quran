import { useState, useEffect } from 'react';

export default function Bookmark({ item, id }) {
   const handleAddBookmark = (data: any, id: number) => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const newBookmark = data?.verses?.find((verse: any) => verse.number.inQuran === id);

      if (newBookmark) {
         const {
            number: { inSurah, inQuran },
         } = newBookmark;
         const isDuplicate = bookmarks.some((bookmark: any) => bookmark.number_id === inQuran);
         if (!isDuplicate) {
            bookmarks.push({
               number_id: inQuran,
               number_surah: data.number,
               name_arab: data.name.short,
               name_translation: data.name.translation.id,
               name_transliteration: data.name.transliteration.id,
               number_ayat: inSurah,
            });
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            window.dispatchEvent(new Event('bookmarks'));
         }
      }
   };

   const handleRemoveBookmark = (number: number) => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const newBookmarks = bookmarks
         .filter((bookmark: any) => bookmark.number_id !== number)
         .map((bookmark: any) => ({ ...bookmark }));
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      window.dispatchEvent(new Event('bookmarks'));
   };

   const handleBookmarkClick = (item: any, number: number) => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const isSaved = bookmarks.some((bookmark: any) => bookmark.number_id === number);
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
               {bookmarkSaved?.some(e => e.number_id === id) ? (
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
   );
}
