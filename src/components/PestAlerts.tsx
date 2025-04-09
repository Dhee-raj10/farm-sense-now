
import React from 'react';
import { AlertCircle, Bug, Info, X } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const pestAlerts = [
  {
    id: 1,
    pest: 'Aphids',
    severity: 'high',
    location: 'North Field',
    description: 'Large colony of aphids detected on wheat crops in the north field. Immediate treatment recommended.',
    dateDetected: '2025-04-07'
  },
  {
    id: 2,
    pest: 'Corn Borer',
    severity: 'medium',
    location: 'East Field',
    description: 'Early signs of corn borer infestation detected in east field corn crops. Monitor closely.',
    dateDetected: '2025-04-08'
  },
  {
    id: 3,
    pest: 'Wheat Rust',
    severity: 'low',
    location: 'West Field',
    description: 'Minor signs of wheat rust detected. Current conditions are favorable for spread.',
    dateDetected: '2025-04-09'
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high':
      return 'bg-red-500';
    case 'medium':
      return 'bg-amber-500';
    case 'low':
      return 'bg-farm-green';
    default:
      return 'bg-gray-500';
  }
};

const PestAlerts = () => {
  return (
    <section id="pests" className="py-8 space-y-6 fade-in">
      <h2 className="text-2xl font-bold tracking-tight">Pest Alerts</h2>
      
      <Alert variant="destructive" className="border-red-500/50 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Critical Alert</AlertTitle>
        <AlertDescription>
          High pest pressure detected in North Field. Immediate action required to prevent crop damage.
        </AlertDescription>
      </Alert>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {pestAlerts.map((alert) => (
          <Card key={alert.id} className="relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${getSeverityColor(alert.severity)}`}></div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base font-medium">{alert.pest}</CardTitle>
                <Badge variant={alert.severity === 'high' ? 'destructive' : 'outline'} className="capitalize">
                  {alert.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground mb-1">
                <span className="font-medium">Location:</span> {alert.location}
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                <span className="font-medium">Detected:</span> {new Date(alert.dateDetected).toLocaleDateString()}
              </p>
              <p className="text-sm">{alert.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm" className="text-xs">
                View Details
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                Mark as Resolved
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Pest Risk Forecast</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Bug className="h-5 w-5 text-farm-soil mt-0.5" />
            <div>
              <h4 className="font-medium">Aphid Population Trend</h4>
              <p className="text-sm text-muted-foreground">
                Current warm and humid conditions are favorable for aphid population growth. 
                High risk of spread to adjacent fields within 3-5 days if left untreated.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Bug className="h-5 w-5 text-farm-soil mt-0.5" />
            <div>
              <h4 className="font-medium">Corn Borer Development</h4>
              <p className="text-sm text-muted-foreground">
                Temperature conditions are accelerating corn borer development. 
                Early instar larvae currently present. Treatment window: 7-10 days.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-farm-sky mt-0.5" />
            <div>
              <h4 className="font-medium">Weather Impact</h4>
              <p className="text-sm text-muted-foreground">
                Upcoming rainfall on Wednesday may reduce aphid populations temporarily but will 
                increase risk of fungal diseases. Monitor crops after rain events.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Treatment Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="bg-red-500 rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
              <span>
                <strong>For Aphids (High Priority):</strong> Apply recommended insecticide within 24-48 hours. 
                Consider neem oil-based products for organic management.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-amber-500 rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
              <span>
                <strong>For Corn Borer:</strong> Monitor closely. If population increases, consider Bt-based 
                product application within 7 days.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-farm-green rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
              <span>
                <strong>For Wheat Rust:</strong> Current infection level is low. Monitor after rain events. 
                Preventative fungicide may be warranted if conditions remain humid.
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default PestAlerts;
