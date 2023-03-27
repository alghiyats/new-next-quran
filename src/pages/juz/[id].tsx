import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import SurahDetail from '../../components/SurahDetail';
import { Chapter, Juz } from '../../interfaces/Chapter';
import { getJuz } from '../../lib/getJuz';

type Props = {
   juzDetail?: any;
   errors?: string;
};

export default function index({ juzDetail, errors }: Props) {
   const [check, setCheck] = useState<any>();
   const [tafsirOpen, setTafsirOpen] = useState(false);
   const [title, setTitle] = useState('');
   const [numberTafsir, setNumberTafsir] = useState<number>();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [newData, setNewData] = useState<any>(null);

   useEffect(() => {
      if (juzDetail) {
         setTitle(`Juz ${juzDetail.juz} - Next Quran`);
      }
   }, [juzDetail]);

   const handleConfirm = () => {
      localStorage.setItem('lastRead', JSON.stringify(newData));
      window.dispatchEvent(new Event('lastRead'));
      setIsModalOpen(false);
   };

   const handleCancel = () => {
      setIsModalOpen(false);
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

   if (!juzDetail) {
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
                     {juzDetail.data
                        .flatMap(item => item.verses)
                        .filter(verse => verse.number.inQuran === numberTafsir)
                        .map(verse => verse.tafsir.id.long)}
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
                        QS. {newData?.name} Ayat {newData.ayat.map(x => x.number.inSurah)}. Apakah
                        Anda yakin?
                     </p>
                  </p>
               </div>
            </Modal>
         )}

         <div>
            <div className='flex flex-col gap-16'>
               {juzDetail?.data.map(v => (
                  <div key={v.number}>
                     <div className='py-6 flex flex-col gap-4 shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary dark:bg-darkSecondary mb-16'>
                        <p className='text-xl font-bold text-center'>
                           {v.name.transliteration.id}{' '}
                           <span className='text-xl font-arabic'>( {v.name.short} )</span>
                        </p>
                        {/* <p className='text-center text-base capitalize'>
                  {v.numberOfVerses} Ayat - {v.revelation.id}
               </p> */}
                        {v.number > 1 && (
                           <p
                              className='text-3xl text-center font-arabic mb-4'
                              dir='rtl'>
                              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                           </p>
                        )}
                     </div>
                     <div className='flex gap-y-6 flex-col'>
                        {v.verses.map(x => (
                           <SurahDetail
                              key={x.number.inSurah}
                              item={v}
                              arab={x.text}
                              translation={x.translation}
                              ayat={x.number.inSurah}
                              data={x}
                              latin={x.transliteration}
                              check={check}
                              setCheck={setCheck}
                              id={x.number.inQuran}
                              Tafsir={Tafsir}
                              setNewData={setNewData}
                              setIsModalOpen={setIsModalOpen}
                           />
                        ))}
                     </div>
                  </div>
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

      return { props: { juzDetail } };
   } catch (err: any) {
      return { props: { errors: err.message } };
   }
};
