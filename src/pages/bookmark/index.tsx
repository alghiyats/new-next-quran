import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { getSurah } from '../../lib/getSurah';
import { listSurah } from '../../interfaces';
import Link from 'next/link';

export default function Bookmark({ dataSurah }) {
   const [data, setData] = useState<any>();
   const [loading, setLoading] = useState(true);

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

   const surahInfo = data?.map(item => {
      const nomorSurah = item.surah;
      const nomorAyah = item.nomor;
      const id = item.id;
      const surah = dataSurah.find(surah => surah.nomor === nomorSurah);
      return {
         id: id,
         nama: surah.nama,
         nama_latin: surah.nama_latin,
         nomor: nomorAyah,
         nomorSurah: nomorSurah,
      };
   });

   const handleRemoveBookmark = (id: number) => {
      const newBookmarks = data.filter((bookmark: any) => bookmark.id !== id);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      setData(newBookmarks);
      window.dispatchEvent(new Event('bookmarks'));
   };

   const [search, setSearch] = useState('');

   const filteredItems = surahInfo?.filter(
      item =>
         item.nama_latin.toLowerCase().includes(search.toLowerCase()) ||
         item.nomor.toString().includes(search.toLowerCase())
   );

   const bookmarkTitle = (
      <h1 className='font-bold text-2xl mb-6 text-center p-6 bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl'>
         Bookamarks
      </h1>
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
         <div className='my-6 p-1'>
            <form>
               <input
                  type='search'
                  className='dark:bg-darkSecondary shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary w-full py-4 px-6 font-semibold'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder='🔍 Cari Surat ...'
               />
            </form>
         </div>
         <div className='grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2'>
            {filteredItems.map(surah => (
               <div className='pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
                  <div className='flex items-center'>
                     <div className='flex justify-center items-center w-8 h-8 dark:bg-gray-700 bg-gray-100 mr-4 rounded-md text-xs'>
                        {surah.nomorSurah}
                     </div>
                     <div className='flex flex-col'>
                        <Link href={`/surah/${surah.nama_latin.toLowerCase()}#${surah.nomor}`}>
                           <p className='font-semibold hover:text-blue-500 dark:group-hover:text-emerald-500'>
                              {surah.nama_latin}
                           </p>
                        </Link>
                        <p className='text-xs'>Ayat {surah.nomor}</p>
                     </div>
                  </div>
                  <div className='flex items-center gap-2'>
                     <span
                        className="font-['Scheherazade_New'] text-xl font-bold"
                        dir='rtl'>
                        {surah.nama}
                     </span>
                     <span
                        onClick={() => handleRemoveBookmark(surah.id)}
                        className='flex cursor-pointer items-center rounded-full p-2 hover:bg-gray-200 hover:dark:bg-gray-700'>
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
            ))}
         </div>
      </>
   );
}
export const getStaticProps: GetStaticProps = async () => {
   const dataSurah: listSurah[] = await getSurah();
   return { props: { dataSurah } };
};
