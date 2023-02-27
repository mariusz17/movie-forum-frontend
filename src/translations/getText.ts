import { EN, PL } from './texts';
import { TextsKeys } from './texts/types';

export const getText = (textKey: TextsKeys, language: string): string => {
  if (language === 'en' || language === 'en-GB' || language === 'en-US') {
    return EN[textKey];
  }

  if (language === 'pl' || language === 'pl-PL') {
    return PL[textKey];
  }

  return EN[textKey];
};
