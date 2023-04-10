import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CardTitle from './CardTitle';
import Head from 'next/head';

type Ayah = {
   number: {
      inQuran: number;
      inSurah: number;
   };
   text: { arab: string; transliteration: { en: string; id: string } };
   translation: { en: string; id: string };
};

type Surah = {
   name: string;
   ayat: Ayah[];
};

const Pinned: React.FC<{ errors?: string }> = ({ errors }) => {
   const [data, setData] = useState<Surah | null>(null);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      try {
         const datas = JSON.parse(localStorage.getItem('lastRead') || 'null');
         if (!datas || !datas.name || !datas.ayat) {
            throw new Error('Data tidak valid.');
         }
         setData(datas);
         setLoading(false);

         const handleStorageChange = () => {
            try {
               const newData = JSON.parse(localStorage.getItem('lastRead') || 'null');
               if (!newData || !newData.name || !newData.ayat) {
                  throw new Error('Data tidak valid.');
               }
               setData(newData);
            } catch (error) {
               console.error(error);
            }
         };

         window.addEventListener('storage', handleStorageChange);

         return () => {
            window.removeEventListener('storage', handleStorageChange);
         };
      } catch (error) {
         console.error(error);
         setLoading(false);
         setData(null);
      }
   }, []);
   const handleDeleteLastRead = () => {
      localStorage.removeItem('lastRead');
      setData(null);
   };

   const surahName = data?.name.toLowerCase();
   const ayahNumber = data?.ayat[0].number.inSurah;

   return (
      <>
         <CardTitle title={'Ditandai'} />
         {errors && (
            <>
               <Head>
                  <title>Error - Next Quran</title>
               </Head>
               <p>
                  <span style={{ color: 'red' }}>Error:</span> {errors}
               </p>
            </>
         )}

         {loading && (
            <div className='flex flex-col'>
               <div className='my-6'>
                  <div className='animate-pulse h-6 bg-gray-200 rounded w-1/4'></div>
                  <div className='animate-pulse flex my-6 justify-end'>
                     <div className='h-14 bg-gray-200 rounded w-2/3 '></div>
                  </div>
                  <div className='flex flex-col animate-pulse gap-3'>
                     <div className='h-5 bg-gray-200 rounded w-full'></div>
                     <div className='h-5 bg-gray-200 rounded w-full'></div>
                  </div>
               </div>
               <div className='animate-pulse border-y-2'>
                  <div className='h-5 bg-gray-200 rounded w-1/4 my-3'></div>
               </div>
            </div>
         )}
         {!loading && !data && <div className='py-6'>Ditandai Tidak ditemukan...</div>}
         {!loading && data && (
            <>
               <div className='my-6'>
                  <div className='flex justify-between'>
                     <h1 className='text-xl font-bold hover:underline'>
                        {data.name} Ayat {ayahNumber}
                     </h1>
                     <svg
                        onClick={() => handleDeleteLastRead()}
                        className='fill-gray-500 dark:fill-slate-200 w-5 h-5 cursor-pointer'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g>
                           <path d='M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z'></path>
                           <path d='M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14ZM13.6597 17.75H10.3297C9.91975 17.75 9.57975 17.41 9.57975 17C9.57975 16.59 9.91975 16.25 10.3297 16.25H13.6597C14.0697 16.25 14.4097 16.59 14.4097 17C14.4097 17.41 14.0697 17.75 13.6597 17.75ZM14.4997 13.75H9.49975C9.08975 13.75 8.74975 13.41 8.74975 13C8.74975 12.59 9.08975 12.25 9.49975 12.25H14.4997C14.9097 12.25 15.2497 12.59 15.2497 13C15.2497 13.41 14.9097 13.75 14.4997 13.75Z'></path>
                        </g>
                     </svg>
                  </div>

                  <p
                     className='text-3xl font-arabic my-6 leading-loose'
                     dir='rtl'>
                     {data.ayat.map(ar => ar.text.arab)}
                     &nbsp;{ayahNumber.toLocaleString('ar-EG')}
                  </p>
                  <p
                     className='text-sm mb-3 font-latin'
                     dangerouslySetInnerHTML={{
                        __html: data.ayat.map(tr => tr.text.transliteration.id).join(''),
                     }}></p>

                  <p className='text-sm font-arti font-extralight'>
                     {data.ayat.map(idn => idn.translation.id)}
                  </p>
               </div>
               <Link href={`/surah/${surahName}#${data.ayat.map(m => m.number.inSurah)}`}>
                  <h1 className='hover:text-link dark:hover:text-darkLink font-semibold py-3 border-y-2'>
                     Lanjut membaca
                  </h1>
               </Link>
            </>
         )}
      </>
   );
};
export default Pinned;
