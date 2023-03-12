export async function getSurah() {
   const res = await fetch('https://quran-api.santrikoding.com/api/surah');
   const data = await res.json();

   return data;
}
