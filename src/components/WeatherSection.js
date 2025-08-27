import React from 'react';

const WeatherSection = () => {
  const weatherData = {
    current: {
      temperature: 24,
      humidity: 65,
      windSpeed: 12,
      condition: 'Partly Cloudy'
    },
    forecast: [
      { day: 'Today', high: 26, low: 18, condition: 'Sunny', icon: 'bi-sun' },
      { day: 'Tomorrow', high: 24, low: 16, condition: 'Cloudy', icon: 'bi-cloud' },
      { day: 'Wed', high: 22, low: 14, condition: 'Rain', icon: 'bi-cloud-rain' },
      { day: 'Thu', high: 25, low: 17, condition: 'Sunny', icon: 'bi-sun' },
      { day: 'Fri', high: 27, low: 19, condition: 'Partly Cloudy', icon: 'bi-cloud-sun' }
    ]
  };

  return (
    <section className="mb-5">
      <h2 className="h4 fw-bold mb-4">Weather Conditions</h2>
      
      <div className="row g-4">
        {/* Current Weather */}
        <div className="col-lg-4">
          <div className="weather-card card h-100 border-0">
            <div className="card-body text-center">
              <i className="bi bi-cloud-sun display-3 mb-3"></i>
              <h3 className="display-4 fw-bold">{weatherData.current.temperature}°C</h3>
              <p className="mb-3">{weatherData.current.condition}</p>
              
              <div className="row text-center">
                <div className="col-4">
                  <i className="bi bi-droplet d-block mb-1"></i>
                  <small>{weatherData.current.humidity}%</small>
                </div>
                <div className="col-4">
                  <i className="bi bi-wind d-block mb-1"></i>
                  <small>{weatherData.current.windSpeed} km/h</small>
                </div>
                <div className="col-4">
                  <i className="bi bi-eye d-block mb-1"></i>
                  <small>10 km</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="col-lg-8">
          <div className="card h-100 border-0 farm-card">
            <div className="card-body">
              <h5 className="card-title mb-4">5-Day Forecast</h5>
              <div className="row g-3">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="col">
                    <div className="text-center p-3 bg-light rounded">
                      <div className="fw-semibold mb-2">{day.day}</div>
                      <i className={`${day.icon} fs-3 text-primary mb-2 d-block`}></i>
                      <div className="small">
                        <div className="fw-bold">{day.high}°</div>
                        <div className="text-muted">{day.low}°</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;