import { useContext } from 'react';
import { LanguageContext } from '../../context/Language';
import { getText } from '../../translations';

import { TextsKeys } from '../../translations/texts/types';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  const t = (textKey: TextsKeys) => getText(textKey, language);

  return { t };
};
