import { listSurah } from '../interfaces';

export async function getTafsir(id: number): Promise<listSurah> {
   const res = await fetch(`https://equran.id/api/v2/tafsir/${id}`);
   const data = await res.json();

   return data.data;
}
