import React,{ createContext,useState, useEffect,ReactNode} from 'react';
import{login as loginApi,logout as logoutApi,refreshToken as refreshTokenApi} from '../api/services/Auth';

interface AuthContextType {
    accessToken: string | null;
    email: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [email, setUsername] = useState<string | null>(null);
    const login = async (email: string, password: string) => {
        const response = await loginApi(email, password);
        setAccessToken(response.access);
        setUsername(response.email);   
    };
    
    const logout=async () => {
        await logoutApi();
        setAccessToken(null);
        setUsername(null);
    }
    const handleRefreshToken=async () => {
        try {
            const newtoken = await refreshTokenApi();
            setAccessToken(newtoken);
        } catch (error) {
            console.error('Error refreshing token:', error);
            logout();
        }
    }
    useEffect(() => {
        handleRefreshToken();
    },[])

    return (
        <AuthContext.Provider value={{ accessToken, email, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
}
