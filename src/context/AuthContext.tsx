import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    token: null,
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - replace with actual API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      };

      setAuthState({
        isAuthenticated: true,
        user: mockUser,
        token: 'mock-jwt-token',
      });

      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock registration - replace with actual API call
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      const mockUser: User = {
        id: Date.now().toString(),
        name: name,
        email: email,
        avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150`,
      };

      setAuthState({
        isAuthenticated: true,
        user: mockUser,
        token: 'mock-jwt-token',
      });

      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };

  const updateProfile = (userData: Partial<User>) => {
    if (authState.user) {
      setAuthState(prev => ({
        ...prev,
        user: { ...prev.user!, ...userData },
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};