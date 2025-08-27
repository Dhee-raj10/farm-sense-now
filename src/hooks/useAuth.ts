import { useState, useEffect } from 'react';
import { storageUtils } from '@/utils/storage';

interface User {
  email: string;
  farmName?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = storageUtils.getUser();
    setUser(savedUser);
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    storageUtils.setUser(userData);
    setUser(userData);
  };

  const logout = () => {
    storageUtils.removeUser();
    setUser(null);
  };

  const isAuthenticated = !!user;

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout
  };
};