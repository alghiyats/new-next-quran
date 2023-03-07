import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../layouts/Layout';

const IndexPage = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem('lastRead'));
    setData(datas);
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Last read not found.</h1>;
  }

  return (
    <Layout>
      <Link
        href={`/surah/${data.info.name.transliteration.id.toLowerCase()}#${data.verses.map(
          (m) => m.number.inSurah
        )}`}>
        <h1 className="text-sky-700 font-bold">
          {data.info.name.transliteration.id} ayat{' '}
          {data.verses.map((m) => m.number.inSurah)}
        </h1>
      </Link>
    </Layout>
  );
};

export default IndexPage;
