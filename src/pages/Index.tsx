
import React from 'react';
import NavBar from '../components/NavBar';
import DashboardOverview from '../components/DashboardOverview';
import WeatherSection from '../components/WeatherSection';
import SoilHealthSection from '../components/SoilHealthSection';
import PestAlerts from '../components/PestAlerts';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <div className="container py-6">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Farm Dashboard</h1>
          
          <DashboardOverview />
          <WeatherSection />
          <SoilHealthSection />
          <PestAlerts />
          <Recommendations />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
