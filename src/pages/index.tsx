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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Last read not found.</h1>;
  }

  return (
    <Link
      href={`/surah/${data.data.namaLatin.toLowerCase()}#${data.verses.map(
        (m) => m.nomorAyat
      )}`}>
      <h1 className="text-sky-700 font-bold">
        {data.data.namaLatin} ayat{' '}
        {data.verses.map((m) => m.nomorAyat)}
      </h1>
    </Link>
  );
};

export default IndexPage;
