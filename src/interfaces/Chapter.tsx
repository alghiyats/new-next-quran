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
   text: string;
   translation: string;
   transliteration: string;
   tafsir: { id: { short: string; long: string } };
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
   tafsir: { id: string };
   verses: Verse[];
}
