
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
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const DashboardOverview = () => {
  return (
    <section className="py-8 space-y-6 fade-in">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Average Temperature</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-col">
              <span className="stat-value text-farm-sky">24°C</span>
              <span className="stat-label">+2°C from last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Soil Moisture</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-col">
              <span className="stat-value text-farm-green">64%</span>
              <span className="stat-label">Optimal range</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Pest Risk</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-col">
              <span className="stat-value text-amber-500">Medium</span>
              <span className="stat-label">2 alerts active</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Crop Health</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex flex-col">
              <span className="stat-value text-farm-green">Good</span>
              <span className="stat-label">85% healthy crops</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Farm Overview</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <Tabs defaultValue="temperature">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="temperature">Temperature</TabsTrigger>
                <TabsTrigger value="rainfall">Rainfall</TabsTrigger>
                <TabsTrigger value="moisture">Soil Moisture</TabsTrigger>
              </TabsList>
              <TabsContent value="temperature" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={overviewData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="temp" 
                      stroke="#1976D2" 
                      fill="#64B5F6" 
                      name="Temperature (°C)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="rainfall" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={overviewData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="rainfall" 
                      stroke="#0D47A1" 
                      fill="#1976D2" 
                      name="Rainfall (mm)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="moisture" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={overviewData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="moisture" 
                      stroke="#2E7D32" 
                      fill="#4CAF50" 
                      name="Moisture (%)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Crop Performance</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cropData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="growth" name="Growth %" fill="#4CAF50" />
                <Bar dataKey="yield" name="Yield %" fill="#2E7D32" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardOverview;
