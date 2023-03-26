import { Chapter } from '../interfaces/Chapter';

export async function getSurahDetail(id: number): Promise<Chapter> {
   const res = await fetch(`https://next-quran-api.vercel.app/surah/${id}`);
   const data = await res.json();
   return data.data;
}
