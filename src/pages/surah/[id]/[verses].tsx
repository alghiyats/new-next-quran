import { GetStaticPaths, GetStaticProps } from 'next';
import Head from "next/head";
import React, { useEffect, useState } from 'react'
import Modal from '../../../components/Modal';
import Search from '../../../components/Search';
import SurahDetail from '../../../components/SurahDetail';
import { getSurah } from '../../../lib/getSurah';
import { getVersesRange } from '../../../lib/getVersesRange';
import { juzData } from '../../../lib/juz';

export default function Verse({ detail }) {
   const [check, setCheck] = useState<any>();
   const [tafsirOpen, setTafsirOpen] = useState(false);
   const [title, setTitle] = useState('');
   const [numberTafsir, setNumberTafsir] = useState<number>();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [newData, setNewData] = useState<any>(null);
   const [search, setSearch] = useState('');

   const filtered = detail.verses.filter(s => s.number.inSurah.toString().includes(search));

   useEffect(() => {
      if (detail) {
         setTitle(`Surah ${detail?.name.transliteration.id} - Next Quran`);
      }
   }, [detail]);

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
                        ?.filter(x => x.number.inQuran === numberTafsir)
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
                        {newData?.ayat?.map(x => x.number.inSurah)}. Apakah Anda yakin?
                     </p>
                  </p>
               </div>
            </Modal>
         )}
         <div>
            <div className='py-6 flex flex-col gap-4 shadow-[0_5px_35px_rgba(0,0,0,.07)] rounded-xl bg-secondary dark:bg-darkSecondary mb-12'>
               <p className='text-xl font-bold text-center'>
                  {detail?.name.transliteration.id}
                  <span className='text-xl font-arabic'>( {detail?.name.short} )</span>
               </p>
               <p className='text-center text-base capitalize'>
                  {detail?.numberOfVerses} Ayat - {detail?.revelation.id}
               </p>
               {detail?.preBismillah !== null && (
                  <p
                     className='text-3xl text-center font-arabic mb-4'
                     dir='rtl'>{detail.preBismillah.text.arab}
                  </p>
               )}
            </div>
            <Search
               search={search}
               setSearch={setSearch}
               placeholder={'Cari ayat...'}
            />
            <div className='flex gap-y-6 flex-col'>
               {filtered.length > 0 ? (
                  filtered.map(x => (
                     <SurahDetail
                        key={x.number.inSurah}
                        item={detail}
                        text={x.text}
                        translation={x.translation}
                        ayat={x.number.inSurah}
                        data={x}
                        setCheck={setCheck}
                        id={x.number.inQuran}
                        Tafsir={Tafsir}
                        setNewData={setNewData}
                        setIsModalOpen={setIsModalOpen} check={check} />
                  ))
               ) : (
                  <p className='ml-2'>Ayat tidak dutemukan...</p>
               )}
            </div>
         </div></>
   )
}

export const getStaticPaths: GetStaticPaths = async () => {
   const paths = juzData.flatMap(({ surah }) =>
      surah.map((s) => ({
         params: {
            id: s.name.toLowerCase().toString(),
            verses: `${s.verses.start}-${s.verses.end}`,
         },
      }))
   );

   return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
   try {
      const data = await getSurah();
      const matchingData = data.find(
         (item) => item.name.transliteration.id.toLowerCase() === params?.id
      );
      const id = matchingData ? matchingData.number : null;

      if (!id) {
         return { notFound: true };
      }
      const detail = await getVersesRange(id, params.verses.toString());

      return { props: { detail } };
   } catch (err: any) {
      return { props: { errors: err.message } };
   }
};

