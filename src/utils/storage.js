// Storage utility functions for managing user data and application state

export const storageUtils = {
  // User management
  setUser: (user) => {
    localStorage.setItem('farmSenseUser', JSON.stringify(user));
  },

  getUser: () => {
    const user = localStorage.getItem('farmSenseUser');
    return user ? JSON.parse(user) : null;
  },

  removeUser: () => {
    localStorage.removeItem('farmSenseUser');
  },

  isLoggedIn: () => {
    return !!localStorage.getItem('farmSenseUser');
  },

  // OpenAI API Key management
  setOpenAIKey: (key) => {
    localStorage.setItem('farmSenseOpenAIKey', key);
  },

  getOpenAIKey: () => {
    return localStorage.getItem('farmSenseOpenAIKey');
  },

  removeOpenAIKey: () => {
    localStorage.removeItem('farmSenseOpenAIKey');
  },

  // Soil analysis data
  setSoilData: (data) => {
    localStorage.setItem('farmSenseSoilData', JSON.stringify(data));
  },

  getSoilData: () => {
    const data = localStorage.getItem('farmSenseSoilData');
    return data ? JSON.parse(data) : null;
  },

  // Farm settings
  setFarmSettings: (settings) => {
    localStorage.setItem('farmSenseSettings', JSON.stringify(settings));
  },

  getFarmSettings: () => {
    const settings = localStorage.getItem('farmSenseSettings');
    return settings ? JSON.parse(settings) : {
      units: 'metric',
      language: 'en',
      notifications: true
    };
  }
};

export default storageUtils;