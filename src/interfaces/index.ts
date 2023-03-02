export type Surah = {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: {
    short: string;
    long: string;
    transliteration: { en: string; id: string };
    translation: { en: string; id: string };
  };
  revelation: { arab: string; en: string; id: string };
  tafsir: { id: string };
  verses: [{ text: { arab: string } }];
};
