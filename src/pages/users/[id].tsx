import { GetStaticProps, GetStaticPaths } from 'next';
import { Surah } from '../../interfaces';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

type Props = {
  item?: { data: Surah };
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
        item.data ? item.data.name.transliteration.id : 'User Detail'
      } | Next.js + TypeScript Example`}>
      {item.data && <ListDetail item={item.data} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.quran.gading.dev/surah');
  const data = await res.json();
  const paths = data.data.map((user) => ({
    params: { id: user.number.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const res = await fetch('https://api.quran.gading.dev/surah/' + id);
    const item = await res.json();
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
