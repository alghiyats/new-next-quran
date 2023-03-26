import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import SurahDetail from '../../components/SurahDetail';
import { Chapter, Juz } from '../../interfaces/Chapter';
import { getJuz } from '../../lib/getJuz';
import { getSurahDetail } from '../../lib/getSurahDetail';

type Props = {
   detail?: Chapter;
   juzDetail?: Juz;
   errors?: string;
};

export default function index({ juzDetail, detail, errors }: Props) {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [newData, setNewData] = useState<any>(null);
   const [check, setCheck] = useState<any>();
   const [tafsirOpen, setTafsirOpen] = useState(false);
   const [title, setTitle] = useState('');
   const [numberTafsir, setNumberTafsir] = useState<number>();

   //  useEffect(() => {
   //     if (detail) {
   //        setTitle(`Surah ${detail.name.transliteration.id} - Next Quran`);
   //     }
   //  }, [detail]);

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
   return (
      <>
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
            {/* <div className='py-6 flex flex-col gap-4 shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary dark:bg-darkSecondary mb-12'>
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
            </div> */}
            <div className='flex gap-y-6 flex-col'>
               {juzDetail?.verses.map(x => (
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
}

export const getStaticPaths: GetStaticPaths = async () => {
   const data = Array.from({ length: 30 }, (_, index) => index + 1);
   const paths = data?.map(number => ({
      params: { id: number.toString() },
   }));

   return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   try {
      const id = Number(params?.id);

      if (!id) {
         return { notFound: true };
      }
      const juzDetail = await getJuz(id);
      const detail = await getSurahDetail(id);

      return { props: { detail, juzDetail } };
   } catch (err: any) {
      return { props: { errors: err.message } };
   }
};
