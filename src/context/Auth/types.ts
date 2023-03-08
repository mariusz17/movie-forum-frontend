export type User = {
  id: string;
  name: string;
  email: string;
};

export type AuthState = {
  user: User | null;
};

export type AuthActions =
  | { type: 'SET_USER'; payload: User }
  | { type: 'CLEAR_USER' };
