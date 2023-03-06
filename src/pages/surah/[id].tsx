import { GetStaticProps, GetStaticPaths } from 'next';

import { Surah } from '../../interfaces';
import { data } from '../../utils/data';
import ListDetail from '../../components/ListDetail';
import Head from 'next/head';

type Props = {
  item?: Surah;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <>
        <Head>
          <title>Error - Next Quran</title>
        </Head>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </>
    );
  }

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>
          Surah{' '}
          {`${item ? item.name.transliteration.id : 'Surah'} - Next Quran`}
        </title>
      </Head>
      <div>
        <div className="py-6 flex flex-col gap-4 shadow-md  border dark:border-gray-500 duration-300 rounded-md dark:shadow-gray-500 dark:bg-slate-900 mb-12">
          <p className="font-bold text-xl text-center">
            {item.name.transliteration.id}
          </p>
          <p className="text-center text-sm">
            {item.numberOfVerses} Ayat - {item.revelation.id}
          </p>
          <p className=" font-['Uthmani'] text-3xl font-bold text-center">
            {item.preBismillah !== null && item.preBismillah.text.arab}
          </p>
        </div>
        <div className="flex gap-y-6 flex-col">
          {item.verses.map((x) => (
            <ListDetail
              key={x.number.inSurah}
              item={item}
              arab={x.text.arab}
              translation={x.translation.id}
              ayat={x.number.inSurah}
            />
          ))}
        </div>
      </div>
    </>
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
