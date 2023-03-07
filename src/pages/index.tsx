import Head from 'next/head';
import { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { Surah } from '../interfaces';
import { data } from '../utils/data';

type Props = {
  items: Surah[];
};

const IndexPage = ({ items }: Props) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem('lastRead'));
    setData(datas);
  }, []);

  const handleLocalStorageChange = (e) => {
    if (e.key === 'lastRead') {
      setData(e.newValue);
    }
  };

  console.log(data);

  useEffect(() => {
    window.addEventListener('storage', handleLocalStorageChange);

    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home - Next Quran</title>
      </Head>
      <h1 className="text-sky-700 font-bold">{data.info.number}</h1>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const items: Surah[] = data;
  return { props: { items } };
};
export default IndexPage;
