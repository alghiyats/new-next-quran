export interface listSurah {
   nomor: number;
   nama: string;
   namaLatin: string;
   jumlahAyat: number;
   tempatTurun: string;
   arti: string;
   deskripsi: string;
   ayat: {
      nomorAyat: number;
      teksArab: string;
      teksLatin: string;
      teksIndonesia: string;
   }[];
}
