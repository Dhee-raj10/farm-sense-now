// Authentication utility functions

import { storageUtils } from './storage';

export const authUtils = {
  login: (userData) => {
    storageUtils.setUser(userData);
    return Promise.resolve(userData);
  },

  logout: () => {
    storageUtils.removeUser();
    storageUtils.removeOpenAIKey();
    return Promise.resolve();
  },

  getCurrentUser: () => {
    return storageUtils.getUser();
  },

  isAuthenticated: () => {
    return storageUtils.isLoggedIn();
  },

  // Mock authentication for demo
  authenticateUser: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({ email, loginTime: new Date().toISOString() });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  },

  // Mock registration for demo
  registerUser: (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email && userData.password && userData.farmName) {
          const user = {
            email: userData.email,
            farmName: userData.farmName,
            registrationTime: new Date().toISOString()
          };
          resolve(user);
        } else {
          reject(new Error('Missing required fields'));
        }
      }, 1000);
    });
  }
};

export default authUtils;