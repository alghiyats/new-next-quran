import { GetStaticProps, GetStaticPaths } from 'next';

import { Surah } from '../../interfaces';
import { data } from '../../utils/data';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

type Props = {
  item?: Surah;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next Quran">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${item ? item.name.transliteration.id : 'Surah'} - Next Quran`}>
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((item) => ({
    params: { id: item.name.transliteration.id.toLowerCase() },
  }));

  return { paths, fallback: false };
};

function getIdFromName(path: string, data: any[]) {
  const matchingData = data.find(
    (item) => item.name.transliteration.id.toLowerCase() === path.toLowerCase()
  );

  return matchingData ? matchingData.number : null;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = getIdFromName(params?.id as string, data);
    if (!id) {
      return { notFound: true };
    }

    const item = data.find((data) => data.number === Number(id));
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
