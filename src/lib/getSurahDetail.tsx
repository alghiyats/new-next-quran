import { Chapter } from '../interfaces/Chapter';

export async function getSurahDetail(id: number): Promise<Chapter> {
   const res = await fetch(`${process.env.API_ENDPOINT}/${id}`);
   const data = await res.json();
   return data.data;
}
