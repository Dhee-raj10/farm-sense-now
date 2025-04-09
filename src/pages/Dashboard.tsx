
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import DashboardOverview from '@/components/DashboardOverview';
import WeatherSection from '@/components/WeatherSection';
import SoilHealthSection from '@/components/SoilHealthSection';
import PestAlerts from '@/components/PestAlerts';
import SoilImageUpload from '@/components/SoilImageUpload';
import CropRecommendations from '@/components/CropRecommendations';
import Footer from '@/components/Footer';
import { CropRecommendation } from '@/components/CropRecommendations';

// Mock crop recommendations data
const defaultCropRecommendations: CropRecommendation[] = [
  {
    name: "Wheat",
    suitability: "Excellent",
    growingSeason: "Fall to Spring",
    waterRequirements: "Medium",
    soilPreference: "Loamy",
    estimatedYield: "4-6 tons/ha",
    description: "Wheat thrives in your soil conditions. Excellent pH balance and nutrient profile for optimal growth."
  },
  {
    name: "Corn",
    suitability: "Good",
    growingSeason: "Spring to Summer",
    waterRequirements: "High",
    soilPreference: "Loamy, Well-drained",
    estimatedYield: "8-12 tons/ha",
    description: "Corn would grow well with your soil's nitrogen content, but might need additional phosphorus."
  },
  {
    name: "Soybeans",
    suitability: "Good",
    growingSeason: "Late Spring to Fall",
    waterRequirements: "Medium",
    soilPreference: "Loamy, Clay",
    estimatedYield: "2.5-3.5 tons/ha",
    description: "Soybeans are suitable for your soil and can help with nitrogen fixation for future crops."
  },
  {
    name: "Potatoes",
    suitability: "Fair",
    growingSeason: "Spring to Fall",
    waterRequirements: "Medium",
    soilPreference: "Sandy Loam",
    estimatedYield: "20-30 tons/ha",
    description: "Potatoes could grow in your soil but may require additional potassium for best results."
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ email: string; farmName?: string } | null>(null);
  const [cropRecommendations, setCropRecommendations] = useState<CropRecommendation[]>(defaultCropRecommendations);
  const [showSoilAnalysisResults, setShowSoilAnalysisResults] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('farmSenseUser');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  const handleSoilAnalysisComplete = (results: any) => {
    setShowSoilAnalysisResults(true);
    
    // Update crop recommendations based on soil analysis
    // In a real app, this would use actual data from the analysis
    const updatedRecommendations: CropRecommendation[] = [
      {
        name: "Wheat",
        suitability: "Excellent",
        growingSeason: "Fall to Spring",
        waterRequirements: "Medium",
        soilPreference: results.soilType,
        estimatedYield: "4-6 tons/ha",
        description: `Wheat thrives in your ${results.soilType.toLowerCase()} soil with pH ${results.pH}. Excellent nutrient profile for optimal growth.`
      },
      {
        name: "Corn",
        suitability: "Good",
        growingSeason: "Spring to Summer",
        waterRequirements: "High",
        soilPreference: results.soilType,
        estimatedYield: "8-12 tons/ha",
        description: `Corn would grow well with your soil's nitrogen content of ${results.nitrogen}%, but might need additional phosphorus.`
      },
      {
        name: "Soybeans",
        suitability: "Good",
        growingSeason: "Late Spring to Fall",
        waterRequirements: "Medium",
        soilPreference: results.soilType,
        estimatedYield: "2.5-3.5 tons/ha",
        description: "Soybeans are suitable for your soil and can help with nitrogen fixation for future crops."
      },
      {
        name: "Potatoes",
        suitability: "Fair",
        growingSeason: "Spring to Fall",
        waterRequirements: "Medium",
        soilPreference: "Sandy Loam",
        estimatedYield: "20-30 tons/ha",
        description: `Potatoes could grow in your soil but may require additional potassium for best results. Current potassium: ${results.potassium}%.`
      }
    ];
    
    setCropRecommendations(updatedRecommendations);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <div className="container py-6">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {user.farmName ? `${user.farmName} Dashboard` : 'Farm Dashboard'}
          </h1>
          <p className="text-muted-foreground mb-8">Welcome back, {user.email}</p>
          
          <DashboardOverview />
          <WeatherSection />
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 py-8">
            <SoilImageUpload onAnalysisComplete={handleSoilAnalysisComplete} />
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Soil Analysis</h2>
              <p className="text-muted-foreground">
                Upload a clear image of your soil sample to receive detailed analysis and crop recommendations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="bg-farm-green rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
                  <span>Our AI technology will analyze soil composition, texture, and color.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-farm-green rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
                  <span>Receive detailed insights about nutrient levels and pH balance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-farm-green rounded-full w-4 h-4 mt-1 flex-shrink-0"></span>
                  <span>Get personalized crop recommendations based on your soil composition.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {showSoilAnalysisResults && <SoilHealthSection />}
          <PestAlerts />
          <CropRecommendations recommendations={cropRecommendations} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
