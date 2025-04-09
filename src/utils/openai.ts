
import { toast } from "@/hooks/use-toast";

// Temporary API key input storage - in a real app, this would be handled more securely
let openAIKey: string | null = null;

/**
 * Set the OpenAI API key
 */
export const setOpenAIKey = (key: string) => {
  openAIKey = key;
  localStorage.setItem('openAITempKey', key);
};

/**
 * Get the OpenAI API key
 */
export const getOpenAIKey = (): string | null => {
  if (!openAIKey) {
    openAIKey = localStorage.getItem('openAITempKey');
  }
  return openAIKey;
};

/**
 * Clear the OpenAI API key
 */
export const clearOpenAIKey = () => {
  openAIKey = null;
  localStorage.removeItem('openAITempKey');
};

/**
 * Check if OpenAI API key is set
 */
export const hasOpenAIKey = (): boolean => {
  return !!getOpenAIKey();
};

/**
 * Send a request to OpenAI API
 */
export const analyzeWithOpenAI = async (
  prompt: string, 
  soilData?: any
): Promise<string> => {
  const key = getOpenAIKey();
  
  if (!key) {
    throw new Error("OpenAI API key not set");
  }
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are an agricultural AI assistant with expertise in soil analysis, crop recommendations, and farming practices. Provide concise, accurate, and practical advice based on the soil data provided.'
          },
          {
            role: 'user',
            content: soilData 
              ? `${prompt}\n\nSoil Data: ${JSON.stringify(soilData, null, 2)}`
              : prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get response from OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error: any) {
    toast({
      title: "OpenAI API Error",
      description: error.message || "Failed to communicate with OpenAI",
      variant: "destructive"
    });
    throw error;
  }
};
