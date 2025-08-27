export interface User {
  email: string;
  farmName?: string;
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  condition: string;
  forecast: DailyForecast[];
}

export interface DailyForecast {
  date: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
}

export interface SoilData {
  pH: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  moisture: number;
  temperature: number;
  soilType: string;
  healthScore: number;
}

export interface CropRecommendation {
  name: string;
  suitability: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  growingSeason: string;
  waterRequirements: string;
  soilPreference: string;
  estimatedYield: string;
  description: string;
}

export interface PestAlert {
  id: string;
  type: string;
  severity: 'Low' | 'Medium' | 'High';
  crop: string;
  description: string;
  solution: string;
  date: string;
}

export interface FarmSettings {
  units: 'metric' | 'imperial';
  language: string;
  notifications: boolean;
  location?: {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
  };
}