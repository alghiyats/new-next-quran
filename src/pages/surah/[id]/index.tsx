import { GetStaticProps, GetStaticPaths } from 'next';
import SurahDetail from '../../../components/SurahDetail';
import Head from 'next/head';
import { getSurah } from '../../../lib/getSurah';
import { getSurahDetail } from '../../../lib/getSurahDetail';
import { useEffect, useState } from 'react';
import Modal from '../../../components/Modal';
import { Chapter } from '../../../interfaces/Chapter';

type Props = {
   detail?: Chapter;
   errors?: string;
};

const StaticPropsDetail = ({ detail, errors }: Props) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [newData, setNewData] = useState<any>(null);
   const [check, setCheck] = useState<any>();
   const [tafsirOpen, setTafsirOpen] = useState(false);
   const [title, setTitle] = useState('');
   const [numberTafsir, setNumberTafsir] = useState<number>();

   useEffect(() => {
      if (detail) {
         setTitle(`Surah ${detail.name.transliteration.id} - Next Quran`);
      }
   }, [detail]);

   const handleLastRead = (data: any, number_inSurah: number) => {
      const ayat = data?.verses?.filter(verse => verse.number.inSurah === number_inSurah);
      const { name, numberOfVerses, number } = data;
      const newData = {
         number_inSurah,
         number,
         name: name.transliteration.id,
         numberOfVerses,
         ayat,
      };

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

   const handleAddBookmark = (data: any, id: number) => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const newBookmark = data?.verses?.find((verse: any) => verse.number.inQuran === id);

      if (newBookmark) {
         const {
            number: { inSurah, inQuran },
         } = newBookmark;
         const isDuplicate = bookmarks.some((bookmark: any) => bookmark.number_id === inQuran);
         if (!isDuplicate) {
            bookmarks.push({
               number_id: inQuran,
               number_surah: data.number,
               name_arab: data.name.short,
               name_translation: data.name.translation.id,
               name_transliteration: data.name.transliteration.id,
               number_ayat: inSurah,
            });
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            window.dispatchEvent(new Event('bookmarks'));
         }
      }
   };

   const handleRemoveBookmark = (number: number) => {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      const newBookmarks = bookmarks
         .filter((bookmark: any) => bookmark.number_id !== number)
         .map((bookmark: any) => ({ ...bookmark }));
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      window.dispatchEvent(new Event('bookmarks'));
   };

   const Tafsir = number_ayat => {
      setNumberTafsir(number_ayat);
      setTafsirOpen(!tafsirOpen);
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
                  <p>
                     {detail?.verses
                        ?.filter(x => x.number.inSurah === numberTafsir)
                        .map(x => x.tafsir.id.long)}
                  </p>
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
                     QS. {check?.name} Ayat {check?.ayat.map(x => x.number.inSurah)}. Akan di ganti
                     dengan
                     <p>
                        QS. {detail?.name.transliteration.id} Ayat{' '}
                        {newData.ayat.map(x => x.number.inSurah)}. Apakah Anda yakin?
                     </p>
                  </p>
               </div>
            </Modal>
         )}
         <div>
            <div className='py-6 flex flex-col gap-4 shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary dark:bg-darkSecondary mb-12'>
               <p className='text-xl font-bold text-center'>
                  {detail.name.transliteration.id}{' '}
                  <span className='text-xl font-arabic'>( {detail.name.short} )</span>
               </p>
               <p className='text-center text-base capitalize'>
                  {detail.numberOfVerses} Ayat - {detail.revelation.id}
               </p>
               {detail.number > 1 && (
                  <p
                     className='text-3xl text-center font-arabic mb-4'
                     dir='rtl'>
                     بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                  </p>
               )}
            </div>
            <div className='flex gap-y-6 flex-col'>
               {detail.verses.map(x => (
                  <SurahDetail
                     key={x.number.inSurah}
                     item={detail}
                     arab={x.text}
                     translation={x.translation}
                     ayat={x.number.inSurah}
                     handleLastRead={handleLastRead}
                     data={x}
                     latin={x.transliteration}
                     check={check}
                     id={x.number.inQuran}
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
      params: { id: item.name.transliteration.id.toLowerCase() },
   }));

   return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   try {
      const data = await getSurah();
      const matchingData = data.find(
         item => item.name.transliteration.id.toLowerCase() === params?.id
      );
      const id = matchingData ? matchingData.number : null;

      if (!id) {
         return { notFound: true };
      }
      const detail = await getSurahDetail(id);

      return { props: { detail } };
   } catch (err: any) {
      return { props: { errors: err.message } };
   }
};
