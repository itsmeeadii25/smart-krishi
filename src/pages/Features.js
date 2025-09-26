import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🌱',
      title: 'AI Crop Recommendation',
      description: 'Advanced machine learning algorithms analyze soil composition, weather patterns, and historical data to provide personalized crop recommendations.',
      details: ['Soil Analysis', 'Weather Integration', 'Crop Rotation Planning', 'Yield Prediction'],
      color: '#4CAF50'
    },
    {
      icon: '☁️',
      title: 'Weather & Soil Data Integration',
      description: 'Real-time weather forecasts and soil health monitoring to help you make informed decisions about planting and harvesting.',
      details: ['Real-time Weather', 'Soil Health Monitoring', 'Climate Adaptation', 'Risk Assessment'],
      color: '#2196F3'
    },
    {
      icon: '📊',
      title: 'Market Demand & Price Trends',
      description: 'Stay ahead of market trends with comprehensive price analysis and demand forecasting for maximum profitability.',
      details: ['Price Forecasting', 'Market Analysis', 'Demand Prediction', 'Profit Optimization'],
      color: '#FF9800'
    },
    {
      icon: '🎙️',
      title: 'Multilingual Voice & Chat Support',
      description: 'Get instant support in your preferred language with our AI-powered voice assistant and chat system.',
      details: ['Voice Commands', 'Multi-language Support', '24/7 Assistance', 'Natural Language Processing'],
      color: '#9C27B0'
    },
    {
      icon: '📷',
      title: 'Image Upload for Disease Detection',
      description: 'Upload photos of your crops to get instant disease diagnosis and treatment recommendations from our AI system.',
      details: ['Disease Detection', 'Treatment Recommendations', 'Prevention Tips', 'Expert Consultation'],
      color: '#E91E63'
    },
    {
      icon: '📶',
      title: 'Offline Mode for Low Connectivity',
      description: 'Access essential features even in areas with poor internet connectivity, ensuring continuous support for all farmers.',
      details: ['Offline Access', 'Data Synchronization', 'Low Bandwidth Mode', 'Rural Connectivity'],
      color: '#607D8B'
    }
  ];

  return (
    <div className="features">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Krishi AI Features</h1>
            <p className="hero-subtitle">
              Discover the powerful tools and technologies that make Krishi AI the ultimate farming companion
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-icon" style={{ color: feature.color }}>
                      {feature.icon}
                    </div>
                    <h3 className="card-title">{feature.title}</h3>
                    <p className="card-description">{feature.description}</p>
                    <div className="card-hover-indicator">
                      <span>Hover for details</span>
                      <div className="indicator-arrow">→</div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="back-content">
                      <h4>Key Features:</h4>
                      <ul className="feature-list">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="feature-item">
                            <span className="feature-bullet">✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="back-icon" style={{ color: feature.color }}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powered by Advanced Technology</h2>
            <p className="section-subtitle">
              Built with cutting-edge technologies to deliver the best farming experience
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon">🤖</div>
              <h3>Machine Learning</h3>
              <p>Advanced AI algorithms for crop prediction and optimization</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">☁️</div>
              <h3>Cloud Computing</h3>
              <p>Scalable infrastructure for real-time data processing</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">📱</div>
              <h3>Mobile First</h3>
              <p>Responsive design optimized for mobile devices</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Enterprise-grade security for your data protection</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🌐</div>
              <h3>IoT Integration</h3>
              <p>Connect with sensors and smart farming equipment</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>Comprehensive analytics and reporting tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="benefits-overview">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Why Choose Krishi AI?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <div className="benefit-content">
                    <h3>Lightning Fast</h3>
                    <p>Get instant recommendations and insights</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div className="benefit-content">
                    <h3>Highly Accurate</h3>
                    <p>95%+ accuracy in crop recommendations</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-content">
                    <h3>Cost Effective</h3>
                    <p>Reduce farming costs by up to 30%</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🌍</div>
                  <div className="benefit-content">
                    <h3>Eco Friendly</h3>
                    <p>Promote sustainable farming practices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-visual">
              <div className="visual-card">
                <div className="card-header">
                  <h3>Success Metrics</h3>
                </div>
                <div className="metrics-grid">
                  <div className="metric-item">
                    <div className="metric-circle">
                      <span className="metric-number">95%</span>
                    </div>
                    <span className="metric-label">Accuracy Rate</span>
                  </div>
                  <div className="metric-item">
                    <div className="metric-circle">
                      <span className="metric-number">40%</span>
                    </div>
                    <span className="metric-label">Income Increase</span>
                  </div>
                  <div className="metric-item">
                    <div className="metric-circle">
                      <span className="metric-number">50%</span>
                    </div>
                    <span className="metric-label">Cost Reduction</span>
                  </div>
                  <div className="metric-item">
                    <div className="metric-circle">
                      <span className="metric-number">10K+</span>
                    </div>
                    <span className="metric-label">Happy Farmers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Future of Farming?</h2>
            <p>Join thousands of farmers who are already transforming their agriculture with Krishi AI</p>
            <div className="cta-buttons">
              <a href="/recommendation" className="btn-primary">
                <span>Get Started Now</span>
                <div className="btn-shine"></div>
              </a>
              <a href="/contact" className="btn-secondary">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

