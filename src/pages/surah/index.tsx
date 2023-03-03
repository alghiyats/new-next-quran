import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Surah } from '../../interfaces';
import { data } from '../../utils/data';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  items: Surah[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Surah | Next Quran">
    <h1>Surah List</h1>
    <List items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Surah[] = data;
  return { props: { items } };
};

export default WithStaticProps;
