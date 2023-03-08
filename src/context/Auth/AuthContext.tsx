import {
  createContext,
  FC,
  PropsWithChildren,
  useReducer,
  Dispatch,
} from 'react';
import { AuthState, AuthActions } from './types';
import { authReducer } from './authReducer';

const initialState = {
  user: null,
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
