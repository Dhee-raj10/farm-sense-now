// Local Storage utilities
const StorageUtils = {
    // Get item from localStorage
    getItem: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error getting item from localStorage:', error);
            return null;
        }
    },

    // Set item in localStorage
    setItem: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error setting item in localStorage:', error);
            return false;
        }
    },

    // Remove item from localStorage
    removeItem: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing item from localStorage:', error);
            return false;
        }
    },

    // Check if user is logged in
    isLoggedIn: () => {
        return !!StorageUtils.getItem('user');
    },

    // Get current user
    getCurrentUser: () => {
        return StorageUtils.getItem('user');
    },

    // Set current user
    setCurrentUser: (user) => {
        return StorageUtils.setItem('user', user);
    },

    // Logout user
    logout: () => {
        StorageUtils.removeItem('user');
        StorageUtils.removeItem('openai_api_key');
    },

    // OpenAI API Key management
    getOpenAIKey: () => {
        return StorageUtils.getItem('openai_api_key');
    },

    setOpenAIKey: (key) => {
        return StorageUtils.setItem('openai_api_key', key);
    }
};