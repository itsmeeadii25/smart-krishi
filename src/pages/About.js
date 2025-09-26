import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Krishi AI</h1>
            <p className="hero-subtitle">
              Empowering farmers with AI-driven solutions for sustainable and profitable agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem-section">
        <div className="container">
          <div className="section-content">
            <div className="content-text">
              <h2 className="section-title">The Challenge</h2>
              <div className="problem-list">
                <div className="problem-item">
                  <div className="problem-icon">🌡️</div>
                  <div className="problem-content">
                    <h3>Unpredictable Weather</h3>
                    <p>Farmers struggle with climate change, irregular rainfall, and extreme weather conditions affecting crop yields.</p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">💰</div>
                  <div className="problem-content">
                    <h3>Low Profit Margins</h3>
                    <p>Poor crop selection and market timing lead to reduced profits and financial instability for farming families.</p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">🌱</div>
                  <div className="problem-content">
                    <h3>Soil Degradation</h3>
                    <p>Inappropriate farming practices and lack of soil analysis result in declining soil health and productivity.</p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">📊</div>
                  <div className="problem-content">
                    <h3>Limited Market Information</h3>
                    <p>Farmers lack access to real-time market prices, demand trends, and optimal selling strategies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-visual">
              <div className="visual-card">
                <div className="card-header">
                  <h3>Farmer Challenges</h3>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">60%</div>
                    <div className="stat-label">Crop Loss Due to Weather</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">40%</div>
                    <div className="stat-label">Reduced Profits</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">70%</div>
                    <div className="stat-label">Soil Health Decline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Solution</h2>
            <p className="section-subtitle">
              Krishi AI leverages cutting-edge AI technology to revolutionize farming practices
            </p>
          </div>
          
          <div className="solution-grid">
            <div className="solution-card">
              <div className="card-icon">🤖</div>
              <h3>AI-Powered Recommendations</h3>
              <p>Advanced machine learning algorithms analyze soil composition, weather patterns, and historical data to provide personalized crop recommendations.</p>
              <div className="card-features">
                <span className="feature-tag">Soil Analysis</span>
                <span className="feature-tag">Weather Integration</span>
                <span className="feature-tag">Crop Rotation</span>
              </div>
            </div>

            <div className="solution-card">
              <div className="card-icon">📊</div>
              <h3>Real-Time Data Analytics</h3>
              <p>Comprehensive data collection from weather stations, soil sensors, and market APIs to provide accurate, up-to-date insights.</p>
              <div className="card-features">
                <span className="feature-tag">Weather Forecast</span>
                <span className="feature-tag">Market Trends</span>
                <span className="feature-tag">Price Analysis</span>
              </div>
            </div>

            <div className="solution-card">
              <div className="card-icon">🌍</div>
              <h3>Sustainable Farming</h3>
              <p>Promote eco-friendly practices that improve soil health, reduce water usage, and minimize environmental impact.</p>
              <div className="card-features">
                <span className="feature-tag">Water Conservation</span>
                <span className="feature-tag">Organic Methods</span>
                <span className="feature-tag">Carbon Footprint</span>
              </div>
            </div>

            <div className="solution-card">
              <div className="card-icon">📱</div>
              <h3>Accessible Technology</h3>
              <p>User-friendly interface with multilingual support, offline capabilities, and voice assistance for farmers of all technical levels.</p>
              <div className="card-features">
                <span className="feature-tag">Voice Support</span>
                <span className="feature-tag">Offline Mode</span>
                <span className="feature-tag">Multi-language</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Key Benefits</h2>
            <p className="section-subtitle">
              Transform your farming experience with measurable improvements
            </p>
          </div>

          <div className="benefits-content">
            <div className="benefits-visual">
              <div className="benefit-chart">
                <div className="chart-item">
                  <div className="chart-bar" style={{height: '80%'}}>
                    <span className="bar-label">Income</span>
                    <span className="bar-value">+40%</span>
                  </div>
                </div>
                <div className="chart-item">
                  <div className="chart-bar" style={{height: '70%'}}>
                    <span className="bar-label">Yield</span>
                    <span className="bar-value">+35%</span>
                  </div>
                </div>
                <div className="chart-item">
                  <div className="chart-bar" style={{height: '60%'}}>
                    <span className="bar-label">Efficiency</span>
                    <span className="bar-value">+50%</span>
                  </div>
                </div>
                <div className="chart-item">
                  <div className="chart-bar" style={{height: '90%'}}>
                    <span className="bar-label">Sustainability</span>
                    <span className="bar-value">+60%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <div className="benefit-content">
                  <h3>Higher Income</h3>
                  <p>Optimize crop selection and timing to maximize profits with data-driven decisions.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🌱</div>
                <div className="benefit-content">
                  <h3>Sustainable Farming</h3>
                  <p>Implement eco-friendly practices that preserve soil health and protect the environment.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <div className="benefit-content">
                  <h3>Localized Advice</h3>
                  <p>Get region-specific recommendations tailored to your local climate and soil conditions.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📈</div>
                <div className="benefit-content">
                  <h3>Risk Reduction</h3>
                  <p>Minimize farming risks with predictive analytics and early warning systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To democratize access to advanced agricultural technology and empower every farmer 
                with the tools and knowledge needed to achieve sustainable, profitable farming practices. 
                We believe that technology should serve humanity, and there's no better way to do that 
                than by supporting the backbone of our society - our farmers.
              </p>
              <div className="mission-values">
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <span>Empowerment</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🌍</span>
                  <span>Sustainability</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">💡</span>
                  <span>Innovation</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">❤️</span>
                  <span>Community</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-card">
                <div className="card-content">
                  <h3>Join the Revolution</h3>
                  <p>Be part of the agricultural transformation</p>
                  <div className="mission-stats">
                    <div className="mission-stat">
                      <div className="stat-number">10,000+</div>
                      <div className="stat-label">Active Farmers</div>
                    </div>
                    <div className="mission-stat">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Crop Varieties</div>
                    </div>
                    <div className="mission-stat">
                      <div className="stat-number">25+</div>
                      <div className="stat-label">States Covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
