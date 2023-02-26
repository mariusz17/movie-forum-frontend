import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routesMap';

import { Home } from '../pages/Home';
import { AppContainer } from '../components/AppContainer';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <AppContainer />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
