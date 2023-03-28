import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Ayah = {
   number: {
      inQuran: number;
      inSurah: number;
   };
   text: string;
   transliteration: string;
   translation: string;
};

type Surah = {
   name: string;
   ayat: Ayah[];
};

const Home: React.FC<{ errors?: string }> = ({ errors }) => {
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

   const [data, setData] = useState<Surah | null>(null);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const datas = JSON.parse(localStorage.getItem('lastRead') || 'null');
      setData(datas);
      setLoading(false);

      const handleStorageChange = () => {
         const newData = JSON.parse(localStorage.getItem('lastRead') || 'null');
         setData(newData);
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
      };
   }, []);

   const toArabicNumbers = (num: number): string => {
      const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
      const numberString = String(num);
      let result = '';

      for (let i = 0; i < numberString.length; i++) {
         const digit = parseInt(numberString[i]);
         result += arabicNumbers[digit];
      }

      return result;
   };

   const lastReadTitle = (
      <h1 className='font-bold text-2xl mb-6 text-center p-6 bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0 5px 35px rgba(0,0,0,.07)] rounded-xl'>
         Terakhir dibaca
      </h1>
   );

   if (loading) {
      return (
         <>
            {lastReadTitle}
            <h1 className='pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0 5px 35px rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
               Loading....
            </h1>
         </>
      );
   }

   if (!data) {
      return (
         <>
            {lastReadTitle}
            <h1 className='pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0 5px 35px rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
               Tidak ada terakhir dibaca.
            </h1>
         </>
      );
   }

   const surahName = data.name.toLowerCase();
   const ayahNumber = data.ayat[0].number.inSurah;

   return (
      <>
         <Head>
            <title>Next Quran</title>
         </Head>
         {lastReadTitle}

         <div className='shadow-[0_5px_35px_rgba(0,0,0,.07)] bg-secondary dark:bg-darkSecondary rounded-lg p-6'>
            <h1 className='text-xl font-bold hover:underline'>
               {data.name} Ayat {ayahNumber}
            </h1>
            <p
               className='text-3xl font-arabic my-6 leading-[50px]'
               dir='rtl'>
               {data.ayat.map(ar => ar.text)}
               &nbsp;{toArabicNumbers(ayahNumber)}
            </p>
            <p
               className='text-sm font-semibold mb-2'
               dangerouslySetInnerHTML={{
                  __html: data.ayat.map(tr => tr.transliteration).join(''),
               }}></p>

            <p className='text-sm'>{data.ayat.map(idn => idn.translation)}</p>
            <Link href={`/surah/${surahName}#${data.ayat.map(m => m.number.inSurah)}`}>
               <h1 className='hover:text-link dark:hover:text-darkLink font-semibold mt-4 w-max'>
                  Lanjut membaca
               </h1>
            </Link>
         </div>
      </>
   );
};
export default Home;
