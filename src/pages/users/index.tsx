import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Surah } from '../../interfaces';
import { listSurah } from '../../utils/listSurah';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  items: Surah[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Surah[] = listSurah;
  return { props: { items } };
};

export default WithStaticProps;
