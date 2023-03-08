import { AuthActions, AuthState } from './types';

export const authReducer = (
  state: AuthState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case 'SET_USER':
      return { user: action.payload };
    case 'CLEAR_USER':
      return { user: null };
    default:
      return state;
  }
};
