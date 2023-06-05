export async function getSurahList() {
   const res = await fetch(process.env.API_ENDPOINT);
   const data = await res.json();

   return data.chapters;
}
