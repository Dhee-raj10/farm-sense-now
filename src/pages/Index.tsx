import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import DashboardOverview from '../components/DashboardOverview';
import WeatherSection from '../components/WeatherSection';
import SoilHealthSection from '../components/SoilHealthSection';
import PestAlerts from '../components/PestAlerts';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Sprout, BarChart, CloudRain, Upload, Brain } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('farmSenseUser');
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-farm py-24 overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Farming Insights at Your Fingertips
              </h1>
              <p className="text-xl mb-8">
                Upload soil images, analyze soil health, get weather forecasts and receive AI-powered crop recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate('/signup')}
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/login')}
                  className="border-white text-white hover:bg-white/10"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Smart Farm Management Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soil Image Analysis</h3>
                <p className="text-muted-foreground">
                  Upload images of your soil for AI-powered analysis of composition and health
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CloudRain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Weather Forecasting</h3>
                <p className="text-muted-foreground">
                  Accurate weather predictions to plan your farming activities effectively
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Soil Health Monitoring</h3>
                <p className="text-muted-foreground">
                  Track soil nutrients, pH levels, moisture and temperature over time
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Recommendations</h3>
                <p className="text-muted-foreground">
                  Get advanced crop suggestions and farming insights powered by OpenAI
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Demo Section */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8">See How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of farmers making data-driven decisions with FarmSense Now
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/signup')}
            >
              Create Free Account
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
