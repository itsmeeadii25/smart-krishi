import React, { useState } from 'react';
import './Recommendation.css';

const Recommendation = () => {
  const [formData, setFormData] = useState({
    soilType: '',
    phValue: '',
    moistureLevel: '',
    location: '',
    image: null
  });
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const soilTypes = [
    'Clay Soil',
    'Sandy Soil',
    'Loamy Soil',
    'Silt Soil',
    'Peaty Soil',
    'Chalky Soil'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowResults(false);

    // Simulate API call with loading animation
    setTimeout(() => {
      const mockRecommendations = {
        suggestedCrops: [
          { name: 'Rice', yield: 'High', profit: '₹45,000/acre', sustainability: 85 },
          { name: 'Wheat', yield: 'Medium', profit: '₹35,000/acre', sustainability: 90 },
          { name: 'Maize', yield: 'High', profit: '₹40,000/acre', sustainability: 80 }
        ],
        yieldForecast: 'Expected yield: 3.2 tons/acre',
        profitMargin: 'Estimated profit margin: 35%',
        sustainabilityScore: 85,
        recommendations: [
          'Optimal planting time: Mid-June to Early July',
          'Recommended fertilizer: NPK 20:20:20',
          'Water requirement: 1200mm per season',
          'Pest control: Use neem-based organic pesticides'
        ]
      };
      
      setRecommendations(mockRecommendations);
      setIsLoading(false);
      setShowResults(true);
    }, 3000);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            location: `${position.coords.latitude}, ${position.coords.longitude}`
          }));
        },
        (error) => {
          alert('Unable to get location. Please enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="recommendation">
      {/* Hero Section */}
      <section className="recommendation-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">AI Crop Recommendation</h1>
            <p className="hero-subtitle">
              Get personalized crop recommendations based on your soil, weather, and location data
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Tell Us About Your Farm</h2>
              <p>Fill in the details below to get AI-powered crop recommendations</p>
            </div>

            <form onSubmit={handleSubmit} className="recommendation-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="soilType">Soil Type</label>
                  <select
                    id="soilType"
                    name="soilType"
                    value={formData.soilType}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select Soil Type</option>
                    {soilTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="phValue">Soil pH Value</label>
                  <input
                    type="number"
                    id="phValue"
                    name="phValue"
                    value={formData.phValue}
                    onChange={handleInputChange}
                    min="1"
                    max="14"
                    step="0.1"
                    placeholder="e.g., 6.5"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="moistureLevel">Moisture Level (%)</label>
                  <input
                    type="number"
                    id="moistureLevel"
                    name="moistureLevel"
                    value={formData.moistureLevel}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    placeholder="e.g., 65"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <div className="location-input">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter your location or coordinates"
                      required
                      className="form-input"
                    />
                    <button
                      type="button"
                      onClick={getLocation}
                      className="location-btn"
                    >
                      📍 Get GPS
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="image">Upload Crop/Disease Image (Optional)</label>
                <div className="image-upload">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-input"
                  />
                  <label htmlFor="image" className="file-label">
                    <span className="upload-icon">📷</span>
                    <span className="upload-text">
                      {formData.image ? formData.image.name : 'Choose Image or Drag & Drop'}
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Analyzing Your Data...
                  </>
                ) : (
                  <>
                    <span>Get Recommendation</span>
                    <div className="btn-shine"></div>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Loading Section */}
      {isLoading && (
        <section className="loading-section">
          <div className="container">
            <div className="loading-content">
              <div className="loading-animation">
                <div className="loading-icon">🌱</div>
                <div className="loading-text">
                  <h3>Analyzing Your Farm Data</h3>
                  <p>Our AI is processing your soil, weather, and location information...</p>
                </div>
              </div>
              <div className="loading-steps">
                <div className="step active">
                  <div className="step-icon">🌍</div>
                  <span>Analyzing Location</span>
                </div>
                <div className="step active">
                  <div className="step-icon">🌱</div>
                  <span>Checking Soil Data</span>
                </div>
                <div className="step">
                  <div className="step-icon">☁️</div>
                  <span>Weather Analysis</span>
                </div>
                <div className="step">
                  <div className="step-icon">📊</div>
                  <span>Generating Recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {showResults && recommendations && (
        <section className="results-section">
          <div className="container">
            <div className="results-header">
              <h2>Your Personalized Recommendations</h2>
              <p>Based on your farm data and AI analysis</p>
            </div>

            <div className="results-grid">
              <div className="results-card main-card">
                <h3>Recommended Crops</h3>
                <div className="crops-list">
                  {recommendations.suggestedCrops.map((crop, index) => (
                    <div key={index} className="crop-item">
                      <div className="crop-info">
                        <h4>{crop.name}</h4>
                        <div className="crop-details">
                          <span className="yield">Yield: {crop.yield}</span>
                          <span className="profit">Profit: {crop.profit}</span>
                          <span className="sustainability">Sustainability: {crop.sustainability}%</span>
                        </div>
                      </div>
                      <div className="crop-score">
                        <div className="score-circle">
                          <span>{crop.sustainability}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="results-card">
                <h3>Yield Forecast</h3>
                <div className="forecast-content">
                  <div className="forecast-icon">📈</div>
                  <p>{recommendations.yieldForecast}</p>
                </div>
              </div>

              <div className="results-card">
                <h3>Profit Margin</h3>
                <div className="profit-content">
                  <div className="profit-icon">💰</div>
                  <p>{recommendations.profitMargin}</p>
                </div>
              </div>

              <div className="results-card">
                <h3>Sustainability Score</h3>
                <div className="sustainability-content">
                  <div className="score-display">
                    <div className="score-circle large">
                      <span>{recommendations.sustainabilityScore}</span>
                    </div>
                    <div className="score-label">Overall Score</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="recommendations-list">
              <h3>Additional Recommendations</h3>
              <ul>
                {recommendations.recommendations.map((rec, index) => (
                  <li key={index} className="recommendation-item">
                    <span className="rec-icon">💡</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="results-actions">
              <button className="btn-primary">
                <span>Save Recommendations</span>
              </button>
              <button className="btn-secondary">
                <span>Share Results</span>
              </button>
              <button 
                className="btn-outline"
                onClick={() => setShowResults(false)}
              >
                <span>Get New Recommendation</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Recommendation;
