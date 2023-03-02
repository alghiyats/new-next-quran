import { GetStaticProps, GetStaticPaths } from 'next';

import { Surah } from '../../interfaces';
import { listSurah } from '../../utils/listSurah';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

type Props = {
  item?: Surah;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name.transliteration.id : 'User Detail'
      } | Next.js + TypeScript Example`}>
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listSurah.map((user) => ({
    params: { id: user.number.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = listSurah.find((data) => data.number === Number(id));
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
