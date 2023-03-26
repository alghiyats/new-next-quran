import { Chapter } from '../interfaces/Chapter';

export async function getJuz(id: number): Promise<Chapter> {
   const res = await fetch(`https://next-quran-api.vercel.app/juz/${id}`);
   const data = await res.json();
   return data.data;
}
