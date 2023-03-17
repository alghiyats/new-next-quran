import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const IndexPage = () => {
   const [data, setData] = useState<any>();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const datas = JSON.parse(localStorage.getItem('lastRead'));
      setData(datas);
      setLoading(false);

      const handleStorageChange = () => {
         const newData = JSON.parse(localStorage.getItem('lastRead'));
         setData(newData);
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
      };
   }, []);

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

   const lastReadTitle = (
      <h1 className='font-bold text-2xl mb-6 text-center p-6 bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl'>
         Terakhir dibaca
      </h1>
   );

   if (loading) {
      return (
         <>
            {lastReadTitle}
            <h1 className='pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
               Loading....
            </h1>
         </>
      );
   }

   if (!data)
      return (
         <>
            {lastReadTitle}
            <h1 className='pl-4 p-6 flex bg-[#fffdfc] dark:bg-[#2d2d30] shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl justify-between items-center'>
               Tidak ada terakhir dibaca.
            </h1>
         </>
      );

   return (
      <>
         <Head>
            <title>Next Quran</title>
         </Head>
         {lastReadTitle}

         <div className='shadow-md bg-secondary dark:bg-darkSecondary rounded-lg p-6'>
            <h1 className='text-xl font-bold'>
               {data.nama_latin} Ayat {data.ayat.map(m => m.nomor)}
            </h1>
            <p
               className='text-3xl font-arabic my-6 leading-[60px]'
               dir='rtl'>
               {data.ayat.map(ar => ar.ar)}&nbsp;{gh(data.ayat.map(m => m.nomor))}
            </p>
            <p
               className='text-sm font-semibold mb-2'
               dangerouslySetInnerHTML={{ __html: data.ayat.map(tr => tr.tr) }}></p>
            <p className='text-sm'>{data.ayat.map(idn => idn.idn)}</p>
            <Link href={`/surah/${data.nama_latin.toLowerCase()}#${data.ayat.map(m => m.nomor)}`}>
               <h1 className='hover:text-link dark:hover:text-darkLink font-semibold mt-4 w-max'>
                  Lanjut membaca
               </h1>
            </Link>
         </div>
      </>
   );
};

export default IndexPage;
