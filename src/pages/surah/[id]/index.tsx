import { GetStaticProps, GetStaticPaths } from 'next';
import { getSurahList } from '../../../lib/getSurahList';
import { getSurahDetail } from '../../../lib/getSurahDetail';
import { Chapter } from '../../../interfaces/Chapter';
import CardAyah from '@/components/card-ayah';
import { NextSeo } from 'next-seo';
import Layout from '@/layout/surah-detail';
import { useRouter } from 'next/router';

type Props = {
   dataAyah?: Chapter;
   dataSurah?: Chapter;
};

const SurahDetail = ({ dataAyah, dataSurah }: Props) => {
   const router = useRouter();
   if (router.isFallback) {
      return <div>Loading...</div>;
   }
   return (
      <>
         <NextSeo
            title={`Surah ${dataAyah?.name.transliteration.id} - Next Quran`}
            description={dataAyah?.tafsir.id}
         />
         <Layout
            dataAyah={dataAyah}
            dataSurah={dataSurah}>
            {dataAyah?.verses?.map((x: any) => (
               <CardAyah
                  key={x.number.inSurah}
                  data={dataAyah}
                  number={x.number}
                  text={x.text}
                  translation={x.translation}
               />
            ))}
         </Layout>
      </>
   );
};

export default SurahDetail;

export const getStaticPaths: GetStaticPaths = async () => {
   const dataSurah = await getSurahList();
   const paths = dataSurah?.map(item => ({
      params: { id: item.name.transliteration.id.toLowerCase() },
   }));

   return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const dataSurah = await getSurahList();
   const matchingData = dataSurah.find(
      item => item.name.transliteration.id.toLowerCase() === params?.id
   );

   const id = matchingData ? matchingData.number : null;

   if (!id) {
      return { notFound: true };
   }

   const dataAyah = await getSurahDetail(id);

   return { props: { dataAyah, dataSurah } };
};
