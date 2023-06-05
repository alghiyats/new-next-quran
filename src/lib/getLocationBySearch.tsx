export async function getLocationBySearch(keyword: string) {
   const res = await fetch(`https://api.myquran.com/v1/sholat/kota/cari/${keyword}`);
   const data = await res.json();
   return data.data;
}
