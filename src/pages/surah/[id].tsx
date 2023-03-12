import { GetStaticProps, GetStaticPaths } from 'next';
import { listSurah } from '../../interfaces';
import ListDetail from '../../components/ListDetail';
import Head from 'next/head';
import { getSurah } from '../../lib/getSurah';
import { getSurahDetail } from '../../lib/getSurahDetail';
import { useEffect, useState } from 'react';
import ModalLastRead from '../../components/ModalLastRead';

type Props = {
   detail?: listSurah;
   errors?: string;
};

const StaticPropsDetail = ({ detail, errors }: Props) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [newData, setNewData] = useState<any>(null);
   const body = document.querySelector('body');

   const handleLastRead = (data: any, number: number) => {
      body.classList.add('overflow-hidden');
      const filteredVerses = data?.ayat?.filter(verse => verse.nomorAyat === number);
      const newData = { data, verses: filteredVerses };
      const lastReadData = JSON.parse(localStorage.getItem('lastRead'));

      if (lastReadData) {
         setNewData(newData);
         setIsModalOpen(true);
      } else {
         localStorage.setItem('lastRead', JSON.stringify(newData));
         window.dispatchEvent(new Event('lastRead'));
      }
   };

   const handleConfirm = () => {
      localStorage.setItem('lastRead', JSON.stringify(newData));
      window.dispatchEvent(new Event('lastRead'));
      setIsModalOpen(false);
      body.classList.remove('overflow-hidden');
   };

   const handleCancel = () => {
      setIsModalOpen(false);
      body.classList.remove('overflow-hidden');
   };

   const [check, setCheck] = useState<any>();

   useEffect(() => {
      const datas = JSON.parse(localStorage.getItem('lastRead'));
      setCheck(datas);

      const handleStorageChange = () => {
         const newData = JSON.parse(localStorage.getItem('lastRead'));
         setCheck(newData);
      };

      window.addEventListener('storage', handleStorageChange);

      const handleLastReadChange = () => {
         const newData = JSON.parse(localStorage.getItem('lastRead'));
         setCheck(newData);
      };

      window.addEventListener('lastRead', handleLastReadChange);

      return () => {
         window.removeEventListener('storage', handleStorageChange);
         window.removeEventListener('lastRead', handleLastReadChange);
      };
   }, []);

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

   if (!detail) {
      return <div>Loading...</div>;
   }

   return (
      <>
         {isModalOpen && (
            <ModalLastRead
               isModalOpen={isModalOpen}
               handleConfirm={handleConfirm}
               handleCancel={handleCancel}
            />
         )}
         <div>
            <div className='py-6 flex flex-col gap-4 shadow-md  border dark:border-gray-500 duration-300 rounded-md dark:shadow-gray-500 dark:bg-slate-900 mb-12'>
               <p className='text-xl font-bold text-center'>{detail.namaLatin}</p>
               <p className='text-center text-base'>
                  {detail.jumlahAyat} Ayat - {detail.tempatTurun}
               </p>
               {detail.nomor > 1 && (
                  <p
                     className='text-3xl text-center font-["Scheherazade_New"] mb-4'
                     dir='rtl'>
                     بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </p>
               )}
            </div>
            <div className='flex gap-y-6 flex-col'>
               {detail.ayat.map(x => (
                  <ListDetail
                     key={x.nomorAyat}
                     item={detail}
                     arab={x.teksArab}
                     translation={x.teksIndonesia}
                     ayat={x.nomorAyat}
                     handleLastRead={handleLastRead}
                     data={x}
                     latin={x.teksLatin}
                     check={check}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
   const data = await getSurah();
   const paths = data?.map(item => ({
      params: { id: item.namaLatin.toLowerCase() },
   }));

   return { paths, fallback: false };
};

function getIdFromName(path: string, data: any[]) {
   const matchingData = data.find(item => item.namaLatin.toLowerCase() === path.toLowerCase());

   return matchingData ? matchingData.nomor : null;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   try {
      const data = await getSurah();
      const id = getIdFromName(params?.id as string, data);
      if (!id) {
         return { notFound: true };
      }
      const detail = await getSurahDetail(id);

      return { props: { detail } };
   } catch (err: any) {
      return { props: { errors: err.message } };
   }
};
