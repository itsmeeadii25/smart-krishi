import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-leaf leaf-1">🍃</div>
            <div className="floating-leaf leaf-2">🌿</div>
            <div className="floating-leaf leaf-3">🌱</div>
            <div className="floating-leaf leaf-4">🌾</div>
            <div className="floating-leaf leaf-5">🌿</div>
            <div className="floating-leaf leaf-6">🍃</div>
          </div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">Smart कृषि</span>
              <span className="title-sub">AI-Powered Crop Recommendation for Farmers</span>
            </h1>
            
            <p className="hero-description">
              Transform your farming with intelligent crop recommendations, weather insights, 
              and market trends. Maximize your yield and profits with data-driven agriculture.
            </p>
            
            <div className="hero-buttons">
              <Link to="/recommendation" className="btn-primary">
                <span>Get Started</span>
                <div className="btn-shine"></div>
              </Link>
              <Link to="/project" className="btn-secondary">
                <span>Project Details</span>
              </Link>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Farmers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Crop Types</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-card">
              <div className="card-header">
                <div className="card-icon">🌱</div>
                <h3>AI Recommendation</h3>
              </div>
              <div className="card-content">
                <div className="recommendation-item">
                  <span className="crop-icon">🌾</span>
                  <span>Rice - High Yield</span>
                </div>
                <div className="recommendation-item">
                  <span className="crop-icon">🌽</span>
                  <span>Maize - Profitable</span>
                </div>
                <div className="recommendation-item">
                  <span className="crop-icon">🌿</span>
                  <span>Wheat - Sustainable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview">
        <div className="container">
            <h2 className="section-title">Why Choose Smart कृषि?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered</h3>
              <p>Advanced machine learning algorithms analyze soil, weather, and market data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Data-Driven</h3>
              <p>Real-time insights from weather stations and market trends</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Profit Maximizing</h3>
              <p>Optimize your farming decisions for maximum profitability</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Sustainable</h3>
              <p>Promote eco-friendly farming practices for future generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Farming?</h2>
            <p>Join thousands of farmers who are already maximizing their yields with Smart कृषि</p>
            <Link to="/recommendation" className="btn-primary large">
              <span>Start Your Journey</span>
              <div className="btn-shine"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
