import { App } from './App';

import { LanguageProvider } from './context/Language';
import { AuthProvider } from './context/Auth';

export const AppProviders = () => {
  return (
    <AuthProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </AuthProvider>
  );
};
