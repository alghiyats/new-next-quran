import { GetStaticProps, GetStaticPaths } from 'next';
import { listSurah } from '../../interfaces';
import ListDetail from '../../components/ListDetail';
import Head from 'next/head';
import { getSurah } from '../../lib/getSurah';
import { getSurahDetail } from '../../lib/getSurahDetail';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import { getTafsir } from '../../lib/getTafsir';

type Props = {
   detail?: listSurah;
   tafsir?: listSurah;
   errors?: string;
};

const StaticPropsDetail = ({ detail, tafsir, errors }: Props) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [newData, setNewData] = useState<any>(null);
   const [check, setCheck] = useState<any>();
   const [numberTafsir, setNumberTafsir] = useState<number>();
   const [tafsirOpen, setTafsirOpen] = useState(false);
   const [title, setTitle] = useState('');

   useEffect(() => {
      if (detail) {
         setTitle(`Surah ${detail.nama_latin} - Next Quran`);
      }
   }, [detail]);

   const Tafsir = (id: number) => {
      setNumberTafsir(id);
      setTafsirOpen(true);
   };

   const handleLastRead = (data: any, number: number) => {
      const ayat = data?.ayat?.filter(verse => verse.nomor === number);
      const { nomor, nama, arti, nama_latin, deskripsi, jumlah_ayat, audio } = data;
      const newData = { nomor, nama, arti, nama_latin, deskripsi, jumlah_ayat, audio, ayat };

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
   };

   const handleCancel = () => {
      setIsModalOpen(false);
   };

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

   const handleAddBookmark = (data: any, number: number) => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const newBookmark = data?.ayat?.find(verse => verse.id === number);

      if (newBookmark) {
         const { id, surah, nomor } = newBookmark; // hanya mengambil atribut surah dan nomor
         bookmarks.push({ nama: data.nama, nama_latin: data.nama_latin, id, surah, nomor });
         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
         window.dispatchEvent(new Event('bookmarks'));
      }
   };

   const handleRemoveBookmark = (number: number) => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const newBookmarks = bookmarks
         .filter((bookmark: any) => bookmark.id !== number)
         .map((bookmark: any) => ({ ...bookmark }));
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      window.dispatchEvent(new Event('bookmarks'));
   };

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
         <Head>
            <title>{title}</title>
         </Head>
         {tafsirOpen && (
            <Modal
               modalTitle={'Tafsir'}
               titleConfirm={'Close'}
               actionConfirm={() => setTafsirOpen(false)}
               actionCancel={() => setTafsirOpen(false)}>
               <div className='relative overflow-y-auto p-4'>
                  <p>{tafsir?.tafsir?.filter(x => x.ayat === numberTafsir).map(x => x.teks)}</p>
               </div>
            </Modal>
         )}
         {isModalOpen && (
            <Modal
               titleConfirm={'Ganti'}
               modalTitle={'Terakhir dibaca'}
               actionConfirm={() => handleConfirm()}
               actionCancel={() => handleCancel()}>
               <div className='relative p-4 py-8'>
                  <p>
                     QS. {check?.nama_latin} Ayat {check?.ayat.map(x => x.nomor)}. Akan di ganti
                     dengan
                     <p>
                        QS. {detail.nama_latin} Ayat {newData.ayat.map(x => x.nomor)}. Apakah Anda
                        yakin?
                     </p>
                  </p>
               </div>
            </Modal>
         )}
         <div>
            <div className='py-6 flex flex-col gap-4 shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary dark:bg-darkSecondary mb-12'>
               <p className='text-xl font-bold text-center'>
                  {detail.nama_latin} <span className='text-xl font-arabic'>( {detail.nama} )</span>
               </p>
               <p className='text-center text-base capitalize'>
                  {detail.jumlah_ayat} Ayat - {detail.tempat_turun}
               </p>
               {detail.nomor > 1 && (
                  <p
                     className='text-3xl text-center font-arabic mb-4'
                     dir='rtl'>
                     بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </p>
               )}
            </div>
            <div className='flex gap-y-6 flex-col'>
               {detail.ayat.map(x => (
                  <ListDetail
                     key={x.nomor}
                     item={detail}
                     arab={x.ar}
                     translation={x.idn}
                     ayat={x.nomor}
                     handleLastRead={handleLastRead}
                     data={x}
                     latin={x.tr}
                     check={check}
                     id={x.id}
                     handleAddBookmark={handleAddBookmark}
                     handleRemoveBookmark={handleRemoveBookmark}
                     Tafsir={Tafsir}
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
      params: { id: item.nama_latin.toLowerCase() },
   }));

   return { paths, fallback: false };
};

function getIdFromName(path: string, data: any[]) {
   const matchingData = data.find(item => item.nama_latin.toLowerCase() === path.toLowerCase());

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
      const tafsir = await getTafsir(id);

      return { props: { detail, tafsir } };
   } catch (err: any) {
      return { props: { errors: err.message } };
   }
};
