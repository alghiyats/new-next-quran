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

   if (loading) {
      return <h1>Loading...</h1>;
   }

   if (!data) {
      return <h1>Last read not found.</h1>;
   }

   const surahInfo = data.map(item => {
      const nomorSurah = item.surah;
      const nomorAyah = item.nomor;
      const surah = dataSurah.find(surah => surah.nomor === nomorSurah);
      return {
         nama: surah.nama,
         nama_latin: surah.nama_latin,
         nomor: nomorAyah,
      };
   });

   return (
      <>
         <h1 className='font-bold text-xl mb-4'>Terakhir dibaca</h1>
         <div className='shadow-md bg-secondary dark:bg-darkSecondary rounded-lg p-6'>
            {surahInfo.map(surah => (
               <div key={surah.nomor}>
                  <Link href={`/surah/${surah.nama_latin.toLowerCase()}#${surah.nomor}`}>
                     <h1 className='hover:text-link dark:hover:text-darkLink font-semibold mt-4'>
                        {surah.nama_latin} ayat {surah.nomor}
                     </h1>
                  </Link>
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
