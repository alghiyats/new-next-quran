import { useEffect, useState } from 'react';
import Link from 'next/link';

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

   if (loading) {
      return <h1>Loading...</h1>;
   }

   if (!data) {
      return <h1>Last read not found.</h1>;
   }

   return (
      <>
         <h1 className='text-sky-700 font-bold text-2xl'>Terakhir dibaca</h1>
         <Link href={`/surah/${data.nama_latin.toLowerCase()}#${data.ayat.map(m => m.nomor)}`}>
            <h1 className='hover:text-sky-700 font-bold'>
               {data.nama_latin} ayat {data.ayat.map(m => m.nomor)}
            </h1>
         </Link>
      </>
   );
};

export default IndexPage;
