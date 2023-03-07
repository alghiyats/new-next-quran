import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const IndexPage = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem('lastRead'));
    setData(datas);
    setLoading(false);
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Last read not found.</h1>;
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

export default IndexPage;
