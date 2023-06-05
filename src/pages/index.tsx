// import { getJadwalShalat } from '@/lib/getJadwalShalat';
// import { getLocationBySearch } from '@/lib/getLocationBySearch';
import React from 'react';

export default function Home() {
   // const [keyword, setKeyword] = useState('');
   // const [results, setResults] = useState([]);
   // const [jadwal, setJadwal] = useState<any>();

   // const fetchSearchResults = async (keyword: string) => {
   //    try {
   //       const data = await getLocationBySearch(keyword);
   //       setResults(data);
   //    } catch (error) {
   //       console.error('Error fetching search results:', error);
   //    }
   // };

   // const fetchJadwal = async (id: string) => {
   //    try {
   //       const today = new Date();
   //       const tahun = today.getFullYear();
   //       const bulan = today.getMonth() + 1;
   //       const hari = today.getDate();

   //       const data = await getJadwalShalat(id, tahun, bulan, hari);
   //       setJadwal(data);
   //    } catch (error) {
   //       console.error('Error fetching jadwal:', error);
   //    }
   // };

   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    const newKeyword = e.target.value;
   //    setKeyword(newKeyword);

   //    if (newKeyword.trim() !== '') {
   //       fetchSearchResults(newKeyword);
   //    } else {
   //       setResults([]);
   //    }
   // };

   // const handleResultClick = (result: string, id: string) => {
   //    setKeyword(result);
   //    setResults([]);
   //    fetchJadwal(id);
   //    console.log('Hasil yang dipilih:', id);
   // };

   return (
      <>
         {/* <div className='flex justify-center flex-col gap-6'>
            <h1 className='font-bold text-2xl text-center'>Jadwal Sholat</h1>
            <div>
               <input
                  type='text'
                  value={keyword}
                  onChange={handleInputChange}
               />
               <div>
                  {results?.map((result, index) => (
                     <div
                        key={index}
                        onClick={() => handleResultClick(result.lokasi, result.id)}>
                        {result.lokasi}
                     </div>
                  ))}
               </div>
            </div>
            {jadwal && (
               <div>
                  <h2>Jadwal Shalat untuk {jadwal.lokasi}</h2>
                  <p>Tanggal: {jadwal.jadwal.tanggal}</p>
                  <p>Imsak: {jadwal.jadwal.imsak}</p>
                  <p>Subuh: {jadwal.jadwal.subuh}</p>
                  <p>Terbit: {jadwal.jadwal.terbit}</p>
                  <p>Dhuha: {jadwal.jadwal.dhuha}</p>
                  <p>Dzuhur: {jadwal.jadwal.dzuhur}</p>
                  <p>Ashar: {jadwal.jadwal.ashar}</p>
                  <p>Maghrib: {jadwal.jadwal.maghrib}</p>
                  <p>Isya: {jadwal.jadwal.isya}</p>
               </div>
            )}
         </div> */}
      </>
   );
}
