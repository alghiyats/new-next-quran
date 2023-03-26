export async function getSurah() {
   const res = await fetch('https://next-quran-api.vercel.app/surah');
   const data = await res.json();

   return data.data;
}
