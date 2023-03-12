import { GetStaticProps } from 'next';
import { listSurah } from '../../interfaces';
import List from '../../components/List';
import { getSurah } from '../../lib/getSurah';

type Props = {
   listSurah: any;
};

export default function SurahList({ listSurah }: Props) {
   if (!listSurah) {
      return <div>Loading...</div>;
   }

   return (
      <>
         <h1 className='text-center text-2xl font-bold mb-6'>Daftar Surah</h1>
         <List items={listSurah} />
      </>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   const listSurah: listSurah[] = await getSurah();
   return { props: { listSurah } };
};
