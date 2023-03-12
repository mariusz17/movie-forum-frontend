import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { Outlet, Navigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routesMap';

export const PrivateRoute = () => {
  const { state: authState } = useContext(AuthContext);

  if (authState.user) {
    return <Outlet />;
  } else {
    return <Navigate to={ROUTES.signIn} />;
  }
};
