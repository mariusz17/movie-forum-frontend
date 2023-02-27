import { App } from './App';

import { LanguageProvider } from './context/Language';

export const AppProviders = () => {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
};
