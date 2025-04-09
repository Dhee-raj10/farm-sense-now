
import React, { useState } from 'react';
import { Upload, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const SoilImageUpload = ({ onAnalysisComplete }: { onAnalysisComplete: (data: any) => void }) => {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive"
      });
      return;
    }
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive"
      });
      return;
    }
    
    // Create URL for preview
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };
  
  const analyzeSoil = () => {
    if (!image) return;
    
    setAnalyzing(true);
    
    // In a real app, this would send the image to a backend for analysis
    // For this demo, we'll simulate an analysis after a delay
    setTimeout(() => {
      const mockAnalysisResults = {
        soilType: "Loamy",
        pH: 6.8,
        nitrogen: 65,
        phosphorus: 45,
        potassium: 80,
        organicMatter: 5.2,
        moisture: 64,
        recommendedCrops: ["Wheat", "Corn", "Potatoes", "Soybeans"]
      };
      
      onAnalysisComplete(mockAnalysisResults);
      
      toast({
        title: "Analysis complete",
        description: "Soil analysis completed successfully",
      });
      
      setAnalyzing(false);
    }, 2500);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          Soil Image Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!image ? (
          <div className="border-2 border-dashed border-border rounded-md p-8 text-center">
            <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-4">
              Upload a clear image of your soil sample for analysis
            </p>
            <Button asChild>
              <label>
                Browse Images
                <input
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative aspect-video rounded-md overflow-hidden">
              <img 
                src={image} 
                alt="Soil sample" 
                className="w-full h-full object-cover"
              />
              {analyzing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                    <p>Analyzing soil composition...</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setImage(null)}
                className="flex-1"
                disabled={analyzing}
              >
                Remove
              </Button>
              <Button 
                onClick={analyzeSoil} 
                className="flex-1"
                disabled={analyzing}
              >
                {analyzing ? 'Analyzing...' : 'Analyze Soil'}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SoilImageUpload;
