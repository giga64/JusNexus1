import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../services/api';

interface User {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Definição do tipo para o token decodificado
interface DecodedToken extends User {
  exp: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('jusnexus_token');
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser({
            name: decodedToken.name,
            email: decodedToken.email,
            role: decodedToken.role,
          });
        } else {
          logout();
        }
      } catch (error) {
        logout();
      }
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('jusnexus_token', token);
    const decodedToken = jwtDecode<DecodedToken>(token);
    setUser({
      name: decodedToken.name,
      email: decodedToken.email,
      role: decodedToken.role,
    });
  };

  const logout = () => {
    localStorage.removeItem('jusnexus_token');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
