
import React from 'react';
import { Droplet, Leaf, AlertTriangle, CloudRain, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const recommendations = [
  {
    id: 1,
    title: 'Irrigation Adjustment',
    type: 'water',
    priority: 'high',
    icon: <Droplet className="h-5 w-5" />,
    description: 'Reduce irrigation in the north field by 15% due to forecasted rainfall and current soil moisture levels.',
    timeframe: 'Immediate',
    impact: 'Water conservation and prevention of waterlogging'
  },
  {
    id: 2,
    title: 'Phosphate Fertilizer Application',
    type: 'nutrient',
    priority: 'medium',
    icon: <Leaf className="h-5 w-5" />,
    description: 'Apply phosphate fertilizer to east field wheat crops to address the detected nutrient deficiency.',
    timeframe: 'Within 2 weeks',
    impact: 'Improved crop development and yield potential'
  },
  {
    id: 3,
    title: 'Pest Management',
    type: 'pest',
    priority: 'high',
    icon: <AlertTriangle className="h-5 w-5" />,
    description: 'Apply targeted insecticide to control aphid infestation in the north field wheat crops.',
    timeframe: 'Within 48 hours',
    impact: 'Prevention of crop damage and yield loss'
  },
  {
    id: 4,
    title: 'Harvest Planning',
    type: 'planning',
    priority: 'low',
    icon: <Calendar className="h-5 w-5" />,
    description: 'Plan corn harvest in west field to begin one week earlier than scheduled based on crop maturity and weather forecast.',
    timeframe: 'Plan within 1 week',
    impact: 'Optimal harvest timing and quality preservation'
  },
  {
    id: 5,
    title: 'Weather Preparation',
    type: 'weather',
    priority: 'medium',
    icon: <CloudRain className="h-5 w-5" />,
    description: 'Secure equipment and prepare drainage systems for expected heavy rainfall on Wednesday.',
    timeframe: 'Before Wednesday',
    impact: 'Prevention of water damage and equipment protection'
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'border-red-500 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300';
    case 'medium':
      return 'border-amber-500 bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300';
    case 'low':
      return 'border-farm-green bg-green-50 text-farm-green dark:bg-green-950 dark:text-green-300';
    default:
      return 'border-gray-500 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
  }
};

const getTypeStyles = (type: string) => {
  switch (type) {
    case 'water':
      return 'text-farm-sky bg-blue-100 border-farm-sky';
    case 'nutrient':
      return 'text-farm-green bg-green-100 border-farm-green';
    case 'pest':
      return 'text-red-500 bg-red-100 border-red-500';
    case 'planning':
      return 'text-purple-500 bg-purple-100 border-purple-500';
    case 'weather':
      return 'text-amber-500 bg-amber-100 border-amber-500';
    default:
      return 'text-gray-500 bg-gray-100 border-gray-500';
  }
};

const Recommendations = () => {
  return (
    <section id="recommendations" className="py-8 space-y-6 fade-in">
      <h2 className="text-2xl font-bold tracking-tight">Farm Management Recommendations</h2>
      
      <div className="grid gap-4 grid-cols-1">
        {recommendations.map((rec) => (
          <Card key={rec.id} className={`border-l-4 ${getPriorityColor(rec.priority)}`}>
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getTypeStyles(rec.type)}`}>
                  {rec.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{rec.title}</h3>
                    <div className="flex items-center gap-2 mt-1 md:mt-0">
                      <Badge variant="outline" className={`capitalize ${getTypeStyles(rec.type)}`}>
                        {rec.type}
                      </Badge>
                      <Badge variant="outline" className="capitalize">
                        {rec.priority} priority
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Timeframe</p>
                      <p className="text-sm font-medium">{rec.timeframe}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Expected Impact</p>
                      <p className="text-sm font-medium">{rec.impact}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm">Mark as Completed</Button>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
