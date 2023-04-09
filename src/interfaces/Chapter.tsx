interface Verse {
   number: {
      inQuran: number;
      inSurah: number;
   };
   meta: {
      juz: number;
      page: number;
      manzil: number;
      ruku: number;
      hizbQuarter: number;
   };
   sajda: {
      recommended: boolean;
      obligatory: boolean;
   };
   text: {
      arab: string;
      transliteration: { en: string; id: string };
   }; translation: { en: string; id: string };
   tafsir: { id: { short: string; long: string } };
   audio: { primary: string }
}

export interface Chapter {
   number: number;
   sequence: number;
   numberOfVerses: number;
   name: {
      short: string;
      long: string;
      transliteration: { id: string };
      translation: { id: string };
   };
   revelation: { arab: string; id: string };
   preBismillah: PreBismillah;
   verses: Verse[];
}
export interface Juz {
   name: any;
   juz: number;
   juzStartSurahNumber: number;
   juzEndSurahNumber: number;
   juzStartInfo: string;
   juzEndInfo: string;
   totalVerses: number;
   data: {
      number: number;
      name: {
         short: string;
         long: string;
         transliteration: { id: string };
         translation: { id: string };
      };
      verses: Verse[];
   }[];
}
interface PreBismillah {
   text?: {
      arab: string;
      transliteration: {
         en: string;
         id: string
      };
   };
   translation?: {
      en: string;
      id: string;
   };
   audio?: {
      primary: string;
   };
}
