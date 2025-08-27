import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUtils } from '../utils/auth';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    farmName: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    // Redirect if already logged in
    if (authUtils.isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    try {
      const user = await authUtils.registerUser(formData);
      await authUtils.login(user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="text-center mb-4">
              <i className="bi bi-person-plus display-1 text-primary"></i>
              <h1 className="h3 text-primary fw-bold">Smart Farming</h1>
              <p className="text-muted">Join our platform for smart farm management</p>
            </div>
            
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4">Create an Account</h2>
                
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="farmName" className="form-label">Farm Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="farmName"
                      name="farmName"
                      value={formData.farmName}
                      onChange={handleChange}
                      placeholder="Your Farm Name"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-farm w-100 mb-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading-spinner me-2"></span>
                        Creating account...
                      </>
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                </form>
                
                <div className="text-center">
                  <span className="text-muted">Already have an account? </span>
                  <button 
                    className="btn btn-link p-0 text-primary"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;