import { GetStaticProps } from 'next';
import { Surah } from '../../interfaces';
import { data } from '../../utils/data';
import List from '../../components/List';
import Head from 'next/head';

type Props = {
  items: Surah[];
};

const WithStaticProps = ({ items }: Props) => (
  <>
    <Head>
      <title>Surah - Next Quran</title>
    </Head>
    <h1 className="text-center text-2xl font bold mb-6">Daftar Surah</h1>
    <List items={items} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Surah[] = data;
  return { props: { items } };
};

export default WithStaticProps;
