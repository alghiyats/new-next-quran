import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Search from '../../components/Search';

export default function Bookmark() {
   const [data, setData] = useState<any>();
   const [loading, setLoading] = useState(true);
   const [search, setSearch] = useState('');

   useEffect(() => {
      const datas = JSON.parse(localStorage.getItem('bookmarks'));
      setData(datas);
      setLoading(false);

      const handleStorageChange = () => {
         const newData = JSON.parse(localStorage.getItem('bookmarks'));
         setData(newData);
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
      };
   }, []);

   const handleRemoveBookmark = (id: number) => {
      const newBookmarks = data.filter((bookmark: any) => bookmark.number_id !== id);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      setData(newBookmarks);
      window.dispatchEvent(new Event('bookmarks'));
   };

   const filtered = data?.filter(
      item =>
         item.name_transliteration.toLowerCase().includes(search.toLowerCase()) ||
         item.number_ayat.toString().includes(search.toLowerCase())
   );

   const bookmarkTitle = (
      <>
         <Head>
            <title>Bookmark - Next Quran</title>
         </Head>
         <h1 className='font-bold text-2xl mb-6 text-center p-6 bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl'>
            Bookamarks
         </h1>
      </>
   );

   if (loading) {
      return (
         <>
            {bookmarkTitle}
            <h1 className='pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
               Loading....
            </h1>
         </>
      );
   }

   if (!data || data < 1) {
      return (
         <>
            {bookmarkTitle}
            <h1 className='pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
               Tidak ada bookmark.
            </h1>
         </>
      );
   }

   return (
      <>
         {bookmarkTitle}
         <Search
            search={search}
            setSearch={setSearch}
            placeholder={'Cari Bookmark...'}
         />
         <div className='grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2'>
            {filtered.length > 0 ? (
               filtered.map(surah => (
                  <div className='pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center relative'>
                     <Link
                        href={`/surah/${surah.name_transliteration.toLowerCase()}#${
                           surah.number_ayat
                        }`}
                        className='inset-0 absolute'></Link>
                     <div className='flex items-center'>
                        <div className='flex justify-center items-center w-8 h-8 dark:bg-darkBg bg-lightBg mr-4 rounded-md text-xs'>
                           {surah.number_surah}
                        </div>
                        <div className='flex flex-col'>
                           <p className='font-semibold group-hover:text-blue-500 dark:group-hover:text-emerald-500'>
                              {surah.name_transliteration}
                           </p>
                           <p className='text-xs'>Ayat {surah.number_ayat}</p>
                        </div>
                     </div>
                     <div className='flex items-center gap-2'>
                        <span
                           className='font-arabic text-xl font-bold'
                           dir='rtl'>
                           {surah.name_arab}
                        </span>
                        <span
                           onClick={() => handleRemoveBookmark(surah.number_id)}
                           className='flex cursor-pointer items-center rounded-full p-2 hover:bg-lightBg hover:dark:bg-darkBg z-10'>
                           <svg
                              className='w-5 h-5'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <g>
                                 <path
                                    className='stroke-gray-500 dark:stroke-slate-200'
                                    d='M18 6V14M18 18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V13M6 9V6M4 6H20M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6'
                                    stroke='#000000'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 />
                              </g>
                           </svg>
                        </span>
                     </div>
                  </div>
               ))
            ) : (
               <p className='m-2'>Bookmark tidak ditemukan ...</p>
            )}
         </div>
      </>
   );
}
