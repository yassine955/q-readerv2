export interface SurahSingleChapter {
   number: number;
   name: string;
   englishName: string;
   englishNameTranslation: string;
   numberOfAyahs: number;
   revelationType: string;
}

export interface SurahChaptersTypes {
   code: number;
   status: string;
   data: SurahSingleChapter[];
}
