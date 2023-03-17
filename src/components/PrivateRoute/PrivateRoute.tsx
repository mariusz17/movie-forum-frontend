import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const { state: authState } = useContext(AuthContext);

  if (authState.user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
