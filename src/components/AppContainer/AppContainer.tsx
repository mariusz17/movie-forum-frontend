import { Outlet } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { AppHeader } from '../AppHeader';

export const AppContainer = () => {
  return (
    <div>
      <AppHeader />
      <Navbar />
      <Outlet />
    </div>
  );
};
