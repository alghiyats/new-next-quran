import { Chapter } from '../interfaces/Chapter';

export async function getVersesRange(id: any, verseRange: string): Promise<Chapter> {
   const res = await fetch(`https://next-quran-api.vercel.app/surah/${id}/${verseRange}`);
   const data = await res.json();
   return data.data;
}
