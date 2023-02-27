import { Outlet } from 'react-router-dom';

import { LanguagePicker } from '../LanguagePicker';

export const AppContainer = () => {
  return (
    <div>
      <LanguagePicker />
      <Outlet />
    </div>
  );
};
