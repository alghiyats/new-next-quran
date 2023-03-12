export interface listSurah {
   nomor: number;
   nama: string;
   nama_latin: string;
   jumlah_ayat: number;
   tempat_turun: string;
   arti: string;
   deskripsi: string;
   audio: string;
   ayat: {
      id: number;
      surah: number;
      nomor: number;
      ar: string;
      tr: string;
      idn: string;
   }[];
}
