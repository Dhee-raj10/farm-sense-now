
import React from 'react';
import { Cloud, CloudRain, Sun, Droplet, Wind, Thermometer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const weatherForecast = [
  { day: 'Mon', temp: 23, humidity: 45, rain: 0, condition: 'sunny' },
  { day: 'Tue', temp: 25, humidity: 50, rain: 0, condition: 'sunny' },
  { day: 'Wed', temp: 22, humidity: 65, rain: 30, condition: 'cloudy' },
  { day: 'Thu', temp: 19, humidity: 80, rain: 70, condition: 'rainy' },
  { day: 'Fri', temp: 20, humidity: 75, rain: 40, condition: 'cloudy' },
  { day: 'Sat', temp: 22, humidity: 60, rain: 10, condition: 'cloudy' },
  { day: 'Sun', temp: 24, humidity: 55, rain: 0, condition: 'sunny' },
];

const hourlyForecast = [
  { time: '6 AM', temp: 18 },
  { time: '9 AM', temp: 20 },
  { time: '12 PM', temp: 24 },
  { time: '3 PM', temp: 25 },
  { time: '6 PM', temp: 23 },
  { time: '9 PM', temp: 20 },
];

const WeatherIcon = ({ condition }: { condition: string }) => {
  switch (condition) {
    case 'sunny':
      return <Sun className="h-8 w-8 text-yellow-400" />;
    case 'cloudy':
      return <Cloud className="h-8 w-8 text-gray-400" />;
    case 'rainy':
      return <CloudRain className="h-8 w-8 text-farm-sky" />;
    default:
      return <Sun className="h-8 w-8 text-yellow-400" />;
  }
};

const WeatherSection = () => {
  return (
    <section id="weather" className="py-8 space-y-6 fade-in">
      <h2 className="text-2xl font-bold tracking-tight">Weather Forecast</h2>
      
      <Card className={`weather-${weatherForecast[0].condition}`}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg font-medium mb-1">Today</p>
              <div className="flex items-center gap-2">
                <WeatherIcon condition={weatherForecast[0].condition} />
                <span className="text-4xl font-bold">{weatherForecast[0].temp}°C</span>
              </div>
              <p className="text-lg capitalize">{weatherForecast[0].condition}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Wind className="h-5 w-5 mb-1" />
                <span className="text-sm font-medium">Wind</span>
                <span className="text-lg">12 km/h</span>
              </div>
              
              <div className="flex flex-col items-center">
                <Droplet className="h-5 w-5 mb-1" />
                <span className="text-sm font-medium">Humidity</span>
                <span className="text-lg">{weatherForecast[0].humidity}%</span>
              </div>
              
              <div className="flex flex-col items-center">
                <CloudRain className="h-5 w-5 mb-1" />
                <span className="text-sm font-medium">Rain Chance</span>
                <span className="text-lg">{weatherForecast[0].rain}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {weatherForecast.map((day) => (
                <div key={day.day} className="flex flex-col items-center">
                  <span className="text-sm font-medium">{day.day}</span>
                  <WeatherIcon condition={day.condition} />
                  <span className="text-sm">{day.temp}°</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Today's Temperature</CardTitle>
          </CardHeader>
          <CardContent className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyForecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#1976D2" 
                  strokeWidth={2} 
                  name="Temperature (°C)" 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Rainfall Last Week</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-end gap-2">
              <span className="stat-value text-farm-sky">42mm</span>
              <span className="text-sm text-farm-green">+15%</span>
            </div>
            <span className="stat-label">Above average</span>
          </CardContent>
        </Card>
        
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Next Rain Forecast</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-center gap-2">
              <CloudRain className="h-5 w-5 text-farm-sky" />
              <span className="stat-value">Wed</span>
            </div>
            <span className="stat-label">Moderate rainfall expected</span>
          </CardContent>
        </Card>
        
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">UV Index</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              <span className="stat-value">6</span>
            </div>
            <span className="stat-label">High - protection needed</span>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WeatherSection;
