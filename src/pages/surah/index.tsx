import { GetStaticProps } from 'next';
import { Surah } from '../../interfaces';
import { data } from '../../utils/data';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  items: Surah[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Surah - Next Quran">
    <h1 className="text-center text-2xl font bold mb-6">Daftar Surah</h1>
    <List items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Surah[] = data;
  return { props: { items } };
};

export default WithStaticProps;
