export interface Ayah {
   number: number;
   text: string;
   numberInSurah: number;
   juz: number;
   manzil: number;
   page: number;
   ruku: number;
   hizbQuarter: number;
   sajda: boolean;
}

export interface Edition {
   identifier: string;
   language: string;
   name: string;
   englishName: string;
   format: string;
   type: string;
   direction: string;
}

export interface AyahTypes {
   number: number;
   name: string;
   englishName: string;
   englishNameTranslation: string;
   revelationType: string;
   numberOfAyahs: number;
   ayahs: Ayah[];
   edition: Edition;
}
