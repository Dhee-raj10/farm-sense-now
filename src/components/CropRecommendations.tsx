
import React from 'react';
import { Sprout, ThermometerSun, Leaf, CloudRain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface CropRecommendation {
  name: string;
  suitability: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  growingSeason: string;
  waterRequirements: 'Low' | 'Medium' | 'High';
  soilPreference: string;
  estimatedYield: string;
  description: string;
}

interface CropRecommendationsProps {
  recommendations: CropRecommendation[];
}

const getSuitabilityColor = (suitability: string) => {
  switch (suitability) {
    case 'Excellent':
      return 'bg-farm-green text-white';
    case 'Good':
      return 'bg-farm-green-light text-white';
    case 'Fair':
      return 'bg-amber-500 text-white';
    case 'Poor':
      return 'bg-red-500 text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getWaterRequirementIcon = (requirement: string) => {
  switch (requirement) {
    case 'Low':
      return <CloudRain className="h-5 w-5 text-farm-sky" />;
    case 'Medium':
      return (
        <div className="flex">
          <CloudRain className="h-5 w-5 text-farm-sky" />
          <CloudRain className="h-5 w-5 text-farm-sky" />
        </div>
      );
    case 'High':
      return (
        <div className="flex">
          <CloudRain className="h-5 w-5 text-farm-sky" />
          <CloudRain className="h-5 w-5 text-farm-sky" />
          <CloudRain className="h-5 w-5 text-farm-sky" />
        </div>
      );
    default:
      return <CloudRain className="h-5 w-5 text-farm-sky" />;
  }
};

const CropRecommendations: React.FC<CropRecommendationsProps> = ({ recommendations }) => {
  return (
    <section id="crop-recommendations" className="py-8 space-y-6 fade-in">
      <h2 className="text-2xl font-bold tracking-tight">Crop Recommendations</h2>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {recommendations.map((crop, index) => (
          <Card key={index} className="farm-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-farm-green" />
                  {crop.name}
                </CardTitle>
                <Badge className={getSuitabilityColor(crop.suitability)}>
                  {crop.suitability}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-2">
              <p className="text-sm text-muted-foreground mb-4">{crop.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-1">
                    <ThermometerSun className="h-4 w-4" />
                    <span>Growing Season</span>
                  </div>
                  <p className="font-medium">{crop.growingSeason}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-1">
                    <CloudRain className="h-4 w-4" />
                    <span>Water Needs</span>
                  </div>
                  <div className="font-medium flex items-center gap-1">
                    {getWaterRequirementIcon(crop.waterRequirements)}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-1">
                    <Leaf className="h-4 w-4" />
                    <span>Soil Type</span>
                  </div>
                  <p className="font-medium">{crop.soilPreference}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-1">
                    <Sprout className="h-4 w-4" />
                    <span>Est. Yield</span>
                  </div>
                  <p className="font-medium">{crop.estimatedYield}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CropRecommendations;
