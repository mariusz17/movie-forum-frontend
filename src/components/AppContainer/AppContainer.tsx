import { Outlet } from 'react-router-dom';

import { Navbar } from '../Navbar';
import { AppHeader } from '../AppHeader';

export const AppContainer = () => {
  return (
    <div>
      <AppHeader />
      <Navbar />
      <main className="flex items-center justify-center max-w-6xl p-2 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
