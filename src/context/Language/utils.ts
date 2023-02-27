import { Languages } from './types';

export const detectBrowserLanguage = (): Languages => {
  const language = navigator.language;

  if (language === 'pl' || language === 'pl-PL') {
    return 'pl';
  }

  if (language === 'en' || language === 'en-GB' || language === 'en-US') {
    return 'en';
  }

  return 'en';
};
