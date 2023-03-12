import { listSurah } from '../interfaces';

export async function getSurahDetail(id: number): Promise<listSurah> {
   const res = await fetch(`https://quran-api.santrikoding.com/api/surah/${id}`);
   const data = await res.json();
   return data;
}
