import { GetStaticProps } from 'next';
import { getSurahList } from '@/lib/getSurahList';
import { Chapter } from '@/interfaces/Chapter';
import CardSurah from '@/components/card-surah';
import clsx from 'clsx';
import { NextSeo } from 'next-seo';

type Props = {
   dataSurah: Chapter[];
   errors?: string;
   isLoading: boolean;
};

export default function SurahList({ dataSurah, errors, isLoading }: Props) {
   return (
      <>
         <NextSeo title='Daftar Surah - Next Quran' />

         {errors && (
            <>
               <NextSeo title='Error - Next Quran' />
               <p>
                  <span style={{ color: 'red' }}>Error:</span> {errors}
               </p>
            </>
         )}

         {isLoading && <p>Loading...</p>}

         {!errors && !isLoading && dataSurah && (
            <main className='lg:flex-[1_0_calc(100%_-_250px_-_25px)] lg:w-[calc(100%_-_250px_-_25px)]'>
               <div className={clsx('grid sm:grid-cols-1 grid-cols-2 gap-6 w-full')}>
                  {dataSurah?.map((c: Chapter) => (
                     <CardSurah
                        key={c.number}
                        number={c.number}
                        name={c.name}
                        numberOfVerses={c.numberOfVerses}
                        revelation={c.revelation}
                     />
                  ))}
               </div>
            </main>
         )}
      </>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   try {
      const dataSurah = await getSurahList();
      return { props: { dataSurah, isLoading: false } };
   } catch (err: any) {
      return { props: { errors: err.message, isLoading: false } };
   }
};
