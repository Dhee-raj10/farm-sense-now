
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Brain, Key, CheckCircle, X } from 'lucide-react';
import { hasOpenAIKey, setOpenAIKey, clearOpenAIKey } from '@/utils/openai';
import { toast } from "@/hooks/use-toast";

const OpenAISetup = () => {
  const [apiKey, setApiKey] = useState('');
  const [isConfigured, setIsConfigured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsConfigured(hasOpenAIKey());
  }, []);
  
  const handleSaveKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // In a real app, you would validate the key by making a test API call
    setTimeout(() => {
      setOpenAIKey(apiKey);
      setIsConfigured(true);
      setApiKey('');
      setIsLoading(false);
      
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved",
      });
    }, 500);
  };
  
  const handleClearKey = () => {
    clearOpenAIKey();
    setIsConfigured(false);
    toast({
      title: "API Key Removed",
      description: "Your OpenAI API key has been removed",
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          OpenAI Integration
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isConfigured ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Enter your OpenAI API key to enable AI-powered crop recommendations and soil analysis.
              Your key will be stored locally in your browser.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Key className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="OpenAI API Key"
                  className="pl-8"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleSaveKey}
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save Key'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-farm-green">
              <CheckCircle className="h-4 w-4" />
              <span>OpenAI API key configured</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered features are now enabled. You can analyze soil samples and get personalized crop recommendations.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleClearKey}
              className="flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Remove API Key
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OpenAISetup;
