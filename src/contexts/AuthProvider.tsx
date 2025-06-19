import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { login as loginApi, logout as logoutApi, refreshToken as refreshTokenApi } from '../api/services/Auth';

interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  email: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    const response = await loginApi(email, password);
    setAccessToken(response.access);
    setRefreshToken(response.refresh);  // store refresh token here
    setEmail(response.email);
  };

  const logout = async () => {
    if (!refreshToken) {
      setAccessToken(null);
      setRefreshToken(null);
      setEmail(null);
      return;
    }
    try {
      await logoutApi(refreshToken);  // send refresh token to backend logout
    } catch (error) {
      console.error('Logout error:', error);
    }
    setAccessToken(null);
    setRefreshToken(null);
    setEmail(null);
  };

  const handleRefreshToken = async () => {
    try {
      const newAccessToken = await refreshTokenApi();
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error('Error refreshing token:', error);
      logout();
    }
  };

  useEffect(() => {
    handleRefreshToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
