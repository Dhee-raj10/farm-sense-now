import React from 'react';

const CropRecommendations = () => {
  const recommendations = [
    {
      name: 'Wheat',
      suitability: 'Excellent',
      growingSeason: 'Fall to Spring',
      waterRequirements: 'Medium',
      soilPreference: 'Loamy',
      estimatedYield: '4-6 tons/ha',
      description: 'Wheat thrives in your soil conditions. Excellent pH balance and nutrient profile for optimal growth.'
    },
    {
      name: 'Corn',
      suitability: 'Good',
      growingSeason: 'Spring to Summer',
      waterRequirements: 'High',
      soilPreference: 'Loamy, Well-drained',
      estimatedYield: '8-12 tons/ha',
      description: 'Corn would grow well with your soil\'s nitrogen content, but might need additional phosphorus.'
    },
    {
      name: 'Soybeans',
      suitability: 'Good',
      growingSeason: 'Late Spring to Fall',
      waterRequirements: 'Medium',
      soilPreference: 'Loamy, Clay',
      estimatedYield: '2.5-3.5 tons/ha',
      description: 'Soybeans are suitable for your soil and can help with nitrogen fixation for future crops.'
    },
    {
      name: 'Potatoes',
      suitability: 'Fair',
      growingSeason: 'Spring to Fall',
      waterRequirements: 'Medium',
      soilPreference: 'Sandy Loam',
      estimatedYield: '20-30 tons/ha',
      description: 'Potatoes could grow in your soil but may require additional potassium for best results.'
    }
  ];

  const getSuitabilityClass = (suitability) => {
    switch (suitability.toLowerCase()) {
      case 'excellent': return 'suitability-excellent';
      case 'good': return 'suitability-good';
      case 'fair': return 'suitability-fair';
      case 'poor': return 'suitability-poor';
      default: return '';
    }
  };

  const getSuitabilityIcon = (suitability) => {
    switch (suitability.toLowerCase()) {
      case 'excellent': return 'bi-star-fill text-success';
      case 'good': return 'bi-star-half text-warning';
      case 'fair': return 'bi-star text-warning';
      case 'poor': return 'bi-star text-danger';
      default: return 'bi-star';
    }
  };

  return (
    <section className="mb-5">
      <h2 className="h4 fw-bold mb-4">Crop Recommendations</h2>
      
      <div className="row g-4">
        {recommendations.map((crop, index) => (
          <div key={index} className="col-lg-6">
            <div className={`crop-recommendation ${getSuitabilityClass(crop.suitability)}`}>
              <div className="d-flex align-items-center mb-3">
                <i className={`${getSuitabilityIcon(crop.suitability)} fs-4 me-3`}></i>
                <div>
                  <h5 className="mb-1 fw-bold">{crop.name}</h5>
                  <span className="badge bg-primary">{crop.suitability}</span>
                </div>
              </div>
              
              <p className="text-muted mb-3">{crop.description}</p>
              
              <div className="row g-2 small">
                <div className="col-6">
                  <strong>Growing Season:</strong><br />
                  <span className="text-muted">{crop.growingSeason}</span>
                </div>
                <div className="col-6">
                  <strong>Water Needs:</strong><br />
                  <span className="text-muted">{crop.waterRequirements}</span>
                </div>
                <div className="col-6">
                  <strong>Soil Preference:</strong><br />
                  <span className="text-muted">{crop.soilPreference}</span>
                </div>
                <div className="col-6">
                  <strong>Est. Yield:</strong><br />
                  <span className="text-muted">{crop.estimatedYield}</span>
                </div>
              </div>
              
              <div className="mt-3">
                <button className="btn btn-sm btn-outline-primary me-2">
                  <i className="bi bi-info-circle me-1"></i>
                  Learn More
                </button>
                <button className="btn btn-sm btn-outline-success">
                  <i className="bi bi-plus-circle me-1"></i>
                  Add to Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <button className="btn btn-farm">
          <i className="bi bi-download me-2"></i>
          Download Full Report
        </button>
      </div>
    </section>
  );
};

export default CropRecommendations;