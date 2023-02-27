import { Dispatch, SetStateAction } from 'react';
export type Languages = 'pl' | 'en';

export type LanguageContextType = {
  language: Languages;
  setLanguage: Dispatch<SetStateAction<Languages>>;
};
