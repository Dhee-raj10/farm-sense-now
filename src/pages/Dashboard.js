import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUtils } from '../utils/auth';
import Navbar from '../components/Navbar';
import DashboardOverview from '../components/DashboardOverview';
import WeatherSection from '../components/WeatherSection';
import SoilAnalysis from '../components/SoilAnalysis';
import CropRecommendations from '../components/CropRecommendations';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = authUtils.getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div>
      <Navbar />
      
      {/* Dashboard Header */}
      <section className="dashboard-header">
        <div className="container">
          <h1 className="display-5 fw-bold mb-2">
            {user.farmName ? `${user.farmName} Dashboard` : 'Farm Dashboard'}
          </h1>
          <p className="lead opacity-75">Welcome back, {user.email}</p>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="container my-5">
        <div className="fade-in">
          <DashboardOverview />
          <WeatherSection />
          <SoilAnalysis />
          <CropRecommendations />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;