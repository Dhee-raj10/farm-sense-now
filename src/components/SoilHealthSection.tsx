
import React from 'react';
import { DropletIcon, Gauge, Leaf, Thermometer } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';

const soilData = [
  { name: 'Nitrogen (N)', value: 65, color: '#1976D2' },
  { name: 'Phosphorus (P)', value: 45, color: '#4CAF50' },
  { name: 'Potassium (K)', value: 80, color: '#795548' },
];

const SoilHealthSection = () => {
  const renderNutrientLevel = (name: string, value: number, max: number, color: string) => {
    const percentage = (value / max) * 100;
    let status = "Low";
    let statusColor = "text-red-500";
    
    if (percentage > 33 && percentage <= 66) {
      status = "Moderate";
      statusColor = "text-amber-500";
    } else if (percentage > 66) {
      status = "Good";
      statusColor = "text-farm-green";
    }
    
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{name}</span>
          <span className={`text-sm ${statusColor}`}>{status}</span>
        </div>
        <Progress value={percentage} className="h-2" indicatorClassName={`bg-${color}`} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0</span>
          <span>{max}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="soil" className="py-8 space-y-6 fade-in">
      <h2 className="text-2xl font-bold tracking-tight">Soil Health</h2>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="soil-healthy">
          <CardContent className="flex flex-col items-center justify-center py-6">
            <Gauge className="h-8 w-8 mb-2" />
            <h3 className="text-lg font-semibold">Overall Soil Health</h3>
            <span className="text-3xl font-bold">Good</span>
          </CardContent>
        </Card>
        
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Soil Moisture</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-center gap-2">
              <DropletIcon className="h-5 w-5 text-farm-sky" />
              <span className="stat-value">64%</span>
            </div>
            <Progress value={64} className="h-2 my-2" />
            <span className="stat-label">Optimal range</span>
          </CardContent>
        </Card>
        
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Soil Temperature</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-red-500" />
              <span className="stat-value">19°C</span>
            </div>
            <span className="stat-label">Perfect for current crops</span>
          </CardContent>
        </Card>
        
        <Card className="farm-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base font-medium">Organic Matter</CardTitle>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-farm-green" />
              <span className="stat-value">5.2%</span>
            </div>
            <span className="stat-label">Above average</span>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Soil Nutrient Levels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderNutrientLevel("Nitrogen (N)", 65, 100, "farm-sky")}
            {renderNutrientLevel("Phosphorus (P)", 45, 100, "farm-green")}
            {renderNutrientLevel("Potassium (K)", 80, 100, "farm-soil")}
            {renderNutrientLevel("pH Level", 6.5, 14, "amber-500")}
            {renderNutrientLevel("Electrical Conductivity", 0.8, 2, "purple-500")}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Nutrient Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={soilData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {soilData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Soil Health Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="bg-farm-green rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
              <span>Your soil moisture levels are optimal. Continue with current irrigation schedule.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-amber-500 rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
              <span>Phosphorus levels are somewhat low. Consider applying phosphate fertilizer within the next two weeks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-farm-green rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
              <span>Potassium levels are excellent, supporting strong root development and disease resistance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-farm-green rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
              <span>Organic matter content is above average at 5.2%. This supports excellent soil structure and microbial activity.</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default SoilHealthSection;
