export async function getJadwalShalat(idkota, tahun, bulan, hari) {
   const res = await fetch(
      `https://api.myquran.com/v1/sholat/jadwal/${idkota}/${tahun}/${bulan}/${hari}`
   );
   const data = await res.json();

   return data.data;
}
