import { createContext } from "react";

export interface User {
  id: number;
  name: string;
}

export interface AuthContextState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextState>({
  user: null,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
