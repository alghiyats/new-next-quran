import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Search from '../../components/Search';

export default function Bookmark({ errors }) {
   if (errors) {
      return (
         <>
            <Head>
               <title>Error - Next Quran</title>
            </Head>
            <p>
               <span style={{ color: 'red' }}>Error:</span> {errors}
            </p>
         </>
      );
   }

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
                  <div className='group pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center relative'>
                     <Link
                        href={`/surah/${surah.name_transliteration.toLowerCase()}#${surah.number_ayat
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
                              className='fill-gray-500 dark:fill-slate-200 w-5 h-5'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <g>
                                 <path d='M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z'></path>
                                 <path d='M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14ZM13.6597 17.75H10.3297C9.91975 17.75 9.57975 17.41 9.57975 17C9.57975 16.59 9.91975 16.25 10.3297 16.25H13.6597C14.0697 16.25 14.4097 16.59 14.4097 17C14.4097 17.41 14.0697 17.75 13.6597 17.75ZM14.4997 13.75H9.49975C9.08975 13.75 8.74975 13.41 8.74975 13C8.74975 12.59 9.08975 12.25 9.49975 12.25H14.4997C14.9097 12.25 15.2497 12.59 15.2497 13C15.2497 13.41 14.9097 13.75 14.4997 13.75Z'></path>
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
