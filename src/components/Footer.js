import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">
              <i className="bi bi-clipboard-data me-2"></i>
              Smart Farming
            </h5>
            <p className="text-muted">
              Empowering farmers with AI-driven insights for better crop management and sustainable farming practices.
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="mb-3">Features</h6>
            <ul className="list-unstyled">
              <li><small className="text-muted">Soil Analysis</small></li>
              <li><small className="text-muted">Weather Monitoring</small></li>
              <li><small className="text-muted">Crop Recommendations</small></li>
              <li><small className="text-muted">AI Insights</small></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><small className="text-muted">Help Center</small></li>
              <li><small className="text-muted">Contact Us</small></li>
              <li><small className="text-muted">Documentation</small></li>
              <li><small className="text-muted">API</small></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <small className="text-muted">
              © 2024 Smart Farming App. All rights reserved.
            </small>
          </div>
          <div className="col-md-6 text-md-end">
            <small className="text-muted">
              Made with <i className="bi bi-heart-fill text-danger"></i> for farmers
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;