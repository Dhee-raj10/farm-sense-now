interface User {
  email: string;
  farmName?: string;
}

export const storageUtils = {
  // User management
  setUser: (user: User): void => {
    localStorage.setItem('farmSenseUser', JSON.stringify(user));
  },

  getUser: (): User | null => {
    const user = localStorage.getItem('farmSenseUser');
    return user ? JSON.parse(user) : null;
  },

  removeUser: (): void => {
    localStorage.removeItem('farmSenseUser');
  },

  isLoggedIn: (): boolean => {
    return !!localStorage.getItem('farmSenseUser');
  },

  // OpenAI API Key management
  setOpenAIKey: (key: string): void => {
    localStorage.setItem('farmSenseOpenAIKey', key);
  },

  getOpenAIKey: (): string | null => {
    return localStorage.getItem('farmSenseOpenAIKey');
  },

  removeOpenAIKey: (): void => {
    localStorage.removeItem('farmSenseOpenAIKey');
  },

  // Soil analysis data
  setSoilData: (data: any): void => {
    localStorage.setItem('farmSenseSoilData', JSON.stringify(data));
  },

  getSoilData: (): any | null => {
    const data = localStorage.getItem('farmSenseSoilData');
    return data ? JSON.parse(data) : null;
  },

  // Farm settings
  setFarmSettings: (settings: any): void => {
    localStorage.setItem('farmSenseSettings', JSON.stringify(settings));
  },

  getFarmSettings: (): any => {
    const settings = localStorage.getItem('farmSenseSettings');
    return settings ? JSON.parse(settings) : {
      units: 'metric',
      language: 'en',
      notifications: true
    };
  }
};

export default storageUtils;