import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { storageUtils } from '../utils/storage';

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Check if user is already logged in
    if (storageUtils.isLoggedIn()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">
                Smart Farming Insights at Your Fingertips
              </h1>
              <p className="lead mb-5">
                Upload soil images, analyze soil health, get weather forecasts and receive AI-powered crop recommendations
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button 
                  className="btn btn-light btn-lg px-4"
                  onClick={() => navigate('/signup')}
                >
                  Get Started
                </button>
                <button 
                  className="btn btn-outline-light btn-lg px-4"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">Smart Farm Management Features</h2>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="farm-card card h-100 border-0">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="bi bi-cloud-upload"></i>
                  </div>
                  <h5 className="card-title">Soil Image Analysis</h5>
                  <p className="card-text text-muted">
                    Upload images of your soil for AI-powered analysis of composition and health
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="farm-card card h-100 border-0">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="bi bi-cloud-rain"></i>
                  </div>
                  <h5 className="card-title">Weather Forecasting</h5>
                  <p className="card-text text-muted">
                    Accurate weather predictions to plan your farming activities effectively
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="farm-card card h-100 border-0">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <h5 className="card-title">Soil Health Monitoring</h5>
                  <p className="card-text text-muted">
                    Track soil nutrients, pH levels, moisture and temperature over time
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="farm-card card h-100 border-0">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className="bi bi-cpu"></i>
                  </div>
                  <h5 className="card-title">AI-Powered Recommendations</h5>
                  <p className="card-text text-muted">
                    Get advanced crop suggestions and farming insights powered by OpenAI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">See How It Works</h2>
          <p className="lead text-muted mb-5 mx-auto" style={{maxWidth: '600px'}}>
            Join thousands of farmers making data-driven decisions with Smart Farming App
          </p>
          <button 
            className="btn btn-farm btn-lg px-5"
            onClick={() => navigate('/signup')}
          >
            Create Free Account
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;