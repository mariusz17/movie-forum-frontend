import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routesMap';

import { PrivateRoute } from '../components/PrivateRoute';
import { Home } from '../pages/Home';
import { Forum } from '../pages/Forum';
import { Favourites } from '../pages/Favourites';
import { Profile } from '../pages/Profile';
import { AppContainer } from '../components/AppContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppContainer />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.forum,
        element: <Forum />,
      },
      {
        path: ROUTES.favourites,
        element: <Favourites />,
      },
      {
        element: <PrivateRoute />,
        children: [{ path: ROUTES.profile, element: <Profile /> }],
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
