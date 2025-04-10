import React from 'react';
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUp, ArrowDown, Droplets, Thermometer, Bug, Sprout } from 'lucide-react';

const overviewData = [
  { name: 'Jan', temp: 12, rainfall: 40, moisture: 65 },
  { name: 'Feb', temp: 15, rainfall: 35, moisture: 59 },
  { name: 'Mar', temp: 18, rainfall: 60, moisture: 80 },
  { name: 'Apr', temp: 22, rainfall: 50, moisture: 81 },
  { name: 'May', temp: 25, rainfall: 30, moisture: 56 },
  { name: 'Jun', temp: 28, rainfall: 25, moisture: 38 },
];

const cropData = [
  { name: 'Wheat', growth: 85, yield: 92 },
  { name: 'Corn', growth: 75, yield: 88 },
  { name: 'Soy', growth: 90, yield: 95 },
  { name: 'Rice', growth: 80, yield: 78 },
];

const StatusIndicator = ({ 
  icon: Icon, 
  value, 
  label, 
  trend, 
  trendValue, 
  trendLabel, 
  color 
}) => {
  const trendIsPositive = trend === 'up';
  const TrendIcon = trendIsPositive ? ArrowUp : ArrowDown;
  const trendColor = trendIsPositive ? 'text-farm-green' : 'text-destructive';
  
  return (
    <div className="flex items-start gap-4">
      <div className={`p-2 rounded-full ${color} bg-opacity-15`}>
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between">
          <h3 className={`text-2xl font-bold ${color}`}>{value}</h3>
          <div className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}>
            <TrendIcon className="h-3 w-3" />
            <span>{trendValue}</span>
          </div>
        </div>
        <div className="flex justify-between items-baseline">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-xs text-muted-foreground">{trendLabel}</p>
        </div>
      </div>
    </div>
  );
};

const DashboardOverview = () => {
  return (
    <section className="py-8 space-y-8 fade-in">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <StatusIndicator 
              icon={Thermometer}
              value="24°C" 
              label="Average Temperature"
              trend="up"
              trendValue="2°C"
              trendLabel="from last week"
              color="text-farm-sky"
            />
          </CardContent>
        </Card>
        
        <Card className="border shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <StatusIndicator 
              icon={Droplets}
              value="64%" 
              label="Soil Moisture"
              trend="up"
              trendValue="5%"
              trendLabel="optimal range"
              color="text-farm-green"
            />
          </CardContent>
        </Card>
        
        <Card className="border shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <StatusIndicator 
              icon={Bug}
              value="Medium" 
              label="Pest Risk"
              trend="up"
              trendValue="2"
              trendLabel="alerts active"
              color="text-amber-500"
            />
          </CardContent>
        </Card>
        
        <Card className="border shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <StatusIndicator 
              icon={Sprout}
              value="Good" 
              label="Crop Health"
              trend="up"
              trendValue="5%"
              trendLabel="healthy crops"
              color="text-farm-green"
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="border shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Farm Overview</CardTitle>
            <CardDescription>6-month historical data analysis</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <Tabs defaultValue="temperature" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="temperature">Temperature</TabsTrigger>
                <TabsTrigger value="rainfall">Rainfall</TabsTrigger>
                <TabsTrigger value="moisture">Soil Moisture</TabsTrigger>
              </TabsList>
              <TabsContent value="temperature" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={overviewData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888" fontSize={12} />
                    <YAxis stroke="#888" fontSize={12} tickFormatter={(value) => `${value}°C`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="temp" 
                      stroke="#1976D2" 
                      strokeWidth={2}
                      fill="url(#temperatureGradient)" 
                      name="Temperature (°C)" 
                    />
                    <defs>
                      <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#64B5F6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#64B5F6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="rainfall" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={overviewData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888" fontSize={12} />
                    <YAxis stroke="#888" fontSize={12} tickFormatter={(value) => `${value}mm`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="rainfall" 
                      stroke="#0D47A1" 
                      strokeWidth={2}
                      fill="url(#rainfallGradient)" 
                      name="Rainfall (mm)" 
                    />
                    <defs>
                      <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1976D2" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#1976D2" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="moisture" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={overviewData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#888" fontSize={12} />
                    <YAxis stroke="#888" fontSize={12} tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="moisture" 
                      stroke="#2E7D32" 
                      strokeWidth={2}
                      fill="url(#moistureGradient)" 
                      name="Moisture (%)" 
                    />
                    <defs>
                      <linearGradient id="moistureGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="border shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Crop Performance</CardTitle>
            <CardDescription>Current growth and yield statistics</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cropData} margin={{ top: 20, right: 30, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" fontSize={12} />
                <YAxis stroke="#888" fontSize={12} tickFormatter={(value) => `${value}%`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                />
                <Legend />
                <Bar 
                  dataKey="growth" 
                  name="Growth %" 
                  fill="#4CAF50" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="yield" 
                  name="Yield %" 
                  fill="#2E7D32" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardOverview;
