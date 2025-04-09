
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Brain, LightbulbIcon } from 'lucide-react';
import { analyzeWithOpenAI, hasOpenAIKey } from '@/utils/openai';
import { toast } from "@/hooks/use-toast";

interface AIRecommendationsProps {
  soilData?: any;
}

const AIRecommendations: React.FC<AIRecommendationsProps> = ({ soilData }) => {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  
  const generateRecommendation = async () => {
    if (!hasOpenAIKey()) {
      toast({
        title: "OpenAI API Key Required",
        description: "Please configure your OpenAI API key first",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const prompt = "Based on the provided soil data, suggest optimal crops to grow, provide advice on soil treatment, and recommend sustainable farming practices. Include information about watering needs, fertilization, and crop rotation strategies.";
      
      const result = await analyzeWithOpenAI(prompt, soilData);
      setRecommendation(result);
    } catch (error) {
      console.error("Error generating AI recommendation:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI-Powered Farming Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!recommendation ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Get advanced farming recommendations based on your soil analysis using artificial intelligence.
            </p>
            <Button 
              onClick={generateRecommendation}
              disabled={loading || !soilData}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing Data...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Generate AI Recommendations
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-md">
              <div className="flex items-center gap-2 mb-3">
                <LightbulbIcon className="h-5 w-5 text-amber-500" />
                <h3 className="font-medium">AI Farming Insights</h3>
              </div>
              <div className="text-sm whitespace-pre-line">
                {recommendation}
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setRecommendation(null)}
              className="w-full"
            >
              Generate New Recommendations
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
