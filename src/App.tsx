import { AppRoutes } from './routes/AppRoutes';

import { useContext, useEffect } from 'react';
import { AuthContext } from './context/Auth';

export const App = () => {
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    // dispatch({
    //   type: 'SET_USER',
    //   payload: {
    //     id: '1',
    //     email: 'marian@o.pl',
    //     name: 'Marian',
    //   },
    // });
  }, []);

  return <AppRoutes />;
};
