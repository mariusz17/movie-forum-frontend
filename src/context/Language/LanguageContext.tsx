import { createContext, useState, FC, PropsWithChildren } from 'react';
import { detectBrowserLanguage } from './utils';

import { LanguageContextType, Languages } from './types';

export const LanguageContext = createContext<LanguageContextType>({
  language: detectBrowserLanguage(),
  setLanguage: () => null,
});

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Languages>(detectBrowserLanguage());

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
