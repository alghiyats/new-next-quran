import Head from 'next/head';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { Surah } from '../interfaces';
import { data } from '../utils/data';
import Link from 'next/link';

type Props = {
  items: Surah[];
};

const IndexPage = ({ items }: Props) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem('lastRead'));
    setData(datas);
  }, []);

  const handleLocalStorageChange = (e) => {
    if (e.key === 'lastRead') {
      setData(e.newValue);
    }
  };

  useEffect(() => {
    window.addEventListener('storage', handleLocalStorageChange);

    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Home - Next Quran</title>
      </Head>
      <Link
        href={`/surah/${data.info.name.transliteration.id.toLowerCase()}#${data.verses.map(
          (m) => m.number.inSurah
        )}`}>
        <h1 className="text-sky-700 font-bold">
          {data.info.name.transliteration.id} ayat{' '}
          {data.verses.map((m) => m.number.inSurah)}
        </h1>
      </Link>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const items: Surah[] = data;
  return { props: { items } };
};
export default IndexPage;
