import { GetStaticProps } from 'next';
import { listSurah } from '../../interfaces';
import List from '../../components/List';
import Layout from '../../layouts/Layout';
import { getSurah } from '../../lib/getSurah';

type Props = {
  listSurah: any;
};

const WithStaticProps = ({ listSurah }: Props) => (
  <>
    <h1 className="text-center text-2xl font bold mb-6">Daftar Surah</h1>
    <List items={listSurah} /></>
);

export const getStaticProps: GetStaticProps = async () => {
  const listSurah: listSurah[] = await getSurah()
  return { props: { listSurah } };
};

export default WithStaticProps;
