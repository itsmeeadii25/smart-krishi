import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const objectives = [
    {
      icon: '🎯',
      title: 'Personalized Recommendations',
      description: 'Provide personalized crop recommendations using real-time soil and weather data',
      color: '#4CAF50',
      details: ['Soil Analysis', 'Weather Integration', 'Real-time Data', 'AI Processing']
    },
    {
      icon: '🌱',
      title: 'Soil Health Preservation',
      description: 'Preserve soil health by integrating past crop rotation and sustainability scores',
      color: '#8BC34A',
      details: ['Crop Rotation', 'Sustainability Scoring', 'Soil Health Monitoring', 'Eco-friendly Practices']
    },
    {
      icon: '💰',
      title: 'Income Optimization',
      description: 'Increase farmer income by considering market demand and price trends',
      color: '#FF9800',
      details: ['Market Analysis', 'Price Trends', 'Demand Forecasting', 'Profit Optimization']
    },
    {
      icon: '🌍',
      title: 'Accessibility & Support',
      description: 'Enable accessibility through multilingual voice & chat support in local languages',
      color: '#2196F3',
      details: ['Multilingual Support', 'Voice Commands', 'Local Languages', '24/7 Assistance']
    },
    {
      icon: '📷',
      title: 'Plant Health Detection',
      description: 'Assist with plant health by allowing farmers to upload crop images for disease detection',
      color: '#E91E63',
      details: ['Image Upload', 'Disease Detection', 'Treatment Recommendations', 'Expert Consultation']
    },
    {
      icon: '📶',
      title: 'Offline Functionality',
      description: 'Ensure usability in rural India with offline functionality and lightweight design',
      color: '#9C27B0',
      details: ['Offline Access', 'Data Synchronization', 'Lightweight Design', 'Rural Connectivity']
    }
  ];

  const systemFlow = [
    {
      step: 1,
      title: 'Data Collection',
      icon: '📊',
      description: 'Gather comprehensive agricultural data',
      details: [
        'Soil properties (pH, moisture, nutrients)',
        'Weather forecast from IMD & OpenWeather APIs',
        'Market demand & price trends',
        'Crop history & rotation data'
      ],
      color: '#4CAF50'
    },
    {
      step: 2,
      title: 'AI Processing',
      icon: '🤖',
      description: 'Advanced machine learning analysis',
      details: [
        'ML model trained on soil-crop datasets',
        'Yield prediction algorithms',
        'Profitability analysis with market trends',
        'Sustainability scoring system'
      ],
      color: '#2196F3'
    },
    {
      step: 3,
      title: 'Computer Vision',
      icon: '👁️',
      description: 'Intelligent image analysis',
      details: [
        'Crop disease detection from images',
        'Plant health assessment',
        'Treatment recommendations',
        'Prevention strategies'
      ],
      color: '#E91E63'
    },
    {
      step: 4,
      title: 'Farmer Interaction',
      icon: '👨‍🌾',
      description: 'User-friendly interface',
      details: [
        'Simple input methods',
        'Local language support',
        'Voice & chat assistance',
        'Offline functionality'
      ],
      color: '#FF9800'
    }
  ];

  const dataSources = [
    {
      name: 'Soil Data',
      source: 'SoilGrids & ISRO Bhuvan APIs',
      icon: '🌍',
      description: 'Satellite-based soil analysis',
      color: '#8BC34A'
    },
    {
      name: 'Weather Data',
      source: 'IMD & OpenWeather APIs',
      icon: '☁️',
      description: 'Real-time weather forecasts',
      color: '#2196F3'
    },
    {
      name: 'Market Data',
      source: 'Agriculture Market APIs',
      icon: '📈',
      description: 'Price trends & demand analysis',
      color: '#FF9800'
    },
    {
      name: 'IoT Sensors',
      source: 'Field Sensors & Devices',
      icon: '📡',
      description: 'Real-time field monitoring',
      color: '#9C27B0'
    }
  ];

  return (
    <div className="project-details">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="hero-background">
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}>🌾</div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-main">Krishi AI</span>
              <span className="title-sub">AI-Driven Agricultural Revolution</span>
            </h1>
            <p className="hero-description">
              Transforming agriculture through cutting-edge AI technology, real-time data analysis, 
              and farmer-centric design for sustainable and profitable farming.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Active Farmers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Crop Varieties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Aim Section */}
      <section className="aim-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🎯 Project Aim</h2>
            <p className="section-subtitle">
              Building the future of agriculture through intelligent technology
            </p>
          </div>
          
          <div className="aim-card">
            <div className="aim-content">
              <div className="aim-icon">🚀</div>
              <h3>Revolutionary Agricultural System</h3>
              <p>
                To build an AI-driven crop recommendation and advisory system that helps farmers make 
                informed decisions about which crops to cultivate, based on soil, weather, crop rotation 
                history, and market demand, delivered through a multilingual, farmer-friendly mobile/web application.
              </p>
              <div className="aim-features">
                <span className="feature-tag">AI-Driven</span>
                <span className="feature-tag">Real-time Data</span>
                <span className="feature-tag">Multilingual</span>
                <span className="feature-tag">Farmer-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">✅ Objectives & Goals</h2>
            <p className="section-subtitle">
              Six key objectives driving agricultural transformation
            </p>
          </div>

          <div className="objectives-grid">
            {objectives.map((objective, index) => (
              <div 
                key={index} 
                className={`objective-card ${activeCard === index ? 'active' : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
                onClick={() => setActiveCard(index)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-icon" style={{ color: objective.color }}>
                      {objective.icon}
                    </div>
                    <h3>{objective.title}</h3>
                    <p>{objective.description}</p>
                    <div className="card-hover-indicator">
                      <span>Click for details</span>
                      <div className="indicator-arrow">→</div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="back-content">
                      <h4>Key Features:</h4>
                      <ul className="feature-list">
                        {objective.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="feature-item">
                            <span className="feature-bullet">✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="back-icon" style={{ color: objective.color }}>
                        {objective.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Flow Section */}
      <section className="system-flow-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">📖 How the System Works</h2>
            <p className="section-subtitle">
              A comprehensive 4-step process from data collection to farmer interaction
            </p>
          </div>

          <div className="flow-container">
            <div className="flow-timeline">
              {systemFlow.map((step, index) => (
                <div key={index} className={`flow-step ${isVisible ? 'visible' : ''}`}>
                  <div className="step-connector"></div>
                  <div className="step-card" style={{ '--delay': `${index * 0.2}s` }}>
                    <div className="step-number">{step.step}</div>
                    <div className="step-icon" style={{ color: step.color }}>
                      {step.icon}
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="step-details">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="detail-item">
                          <span className="detail-bullet">•</span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="data-collection-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">📊 Data Collection Sources</h2>
            <p className="section-subtitle">
              Comprehensive data integration from multiple reliable sources
            </p>
          </div>

          <div className="data-sources-grid">
            {dataSources.map((source, index) => (
              <div 
                key={index} 
                className="data-source-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="source-icon" style={{ color: source.color }}>
                  {source.icon}
                </div>
                <h3>{source.name}</h3>
                <p className="source-description">{source.description}</p>
                <div className="source-api">
                  <span className="api-label">Source:</span>
                  <span className="api-name">{source.source}</span>
                </div>
                <div className="source-animation">
                  <div className="pulse-ring"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Processing Section */}
      <section className="ai-processing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🤖 AI Processing Pipeline</h2>
            <p className="section-subtitle">
              Advanced machine learning models powering intelligent recommendations
            </p>
          </div>

          <div className="ai-pipeline">
            <div className="pipeline-step">
              <div className="step-visual">
                <div className="neural-network">
                  <div className="neuron"></div>
                  <div className="neuron"></div>
                  <div className="neuron"></div>
                  <div className="neuron"></div>
                  <div className="connection"></div>
                  <div className="connection"></div>
                  <div className="connection"></div>
                </div>
              </div>
              <div className="step-content">
                <h3>ML Model Training</h3>
                <p>Trained on comprehensive soil-crop datasets for accurate recommendations</p>
              </div>
            </div>

            <div className="pipeline-step">
              <div className="step-visual">
                <div className="prediction-chart">
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                  <div className="chart-bar" style={{ height: '80%' }}></div>
                  <div className="chart-bar" style={{ height: '70%' }}></div>
                  <div className="chart-bar" style={{ height: '90%' }}></div>
                </div>
              </div>
              <div className="step-content">
                <h3>Yield Prediction</h3>
                <p>Advanced algorithms forecast production for selected crops</p>
              </div>
            </div>

            <div className="pipeline-step">
              <div className="step-visual">
                <div className="profit-wheel">
                  <div className="wheel-center"></div>
                  <div className="wheel-segment" style={{ '--rotation': '0deg' }}></div>
                  <div className="wheel-segment" style={{ '--rotation': '90deg' }}></div>
                  <div className="wheel-segment" style={{ '--rotation': '180deg' }}></div>
                  <div className="wheel-segment" style={{ '--rotation': '270deg' }}></div>
                </div>
              </div>
              <div className="step-content">
                <h3>Profitability Analysis</h3>
                <p>Considers market prices & demand trends for optimal returns</p>
              </div>
            </div>

            <div className="pipeline-step">
              <div className="step-visual">
                <div className="sustainability-meter">
                  <div className="meter-fill" style={{ width: '85%' }}></div>
                  <div className="meter-label">85%</div>
                </div>
              </div>
              <div className="step-content">
                <h3>Sustainability Scoring</h3>
                <p>Checks soil health & crop rotation for long-term sustainability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Interaction Section */}
      <section className="farmer-interaction-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">👨‍🌾 Farmer Interaction</h2>
            <p className="section-subtitle">
              Simple, intuitive interface designed for farmers of all technical levels
            </p>
          </div>

          <div className="interaction-flow">
            <div className="interaction-step">
              <div className="step-icon">📱</div>
              <h3>Simple Input</h3>
              <p>Farmers input location, soil type, or upload field photo</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="interaction-step">
              <div className="step-icon">⚡</div>
              <h3>AI Processing</h3>
              <p>System processes data using advanced algorithms</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="interaction-step">
              <div className="step-icon">📋</div>
              <h3>AI Results</h3>
              <p>Provides recommendations in simple, local-language text/voice</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="interaction-step">
              <div className="step-icon">💡</div>
              <h3>Actionable Insights</h3>
              <p>Includes crop care tips, yield estimates, and profit margins</p>
            </div>
          </div>

          <div className="results-showcase">
            <div className="result-card">
              <h4>Recommended Crops</h4>
              <div className="crop-list">
                <span className="crop-item">🌾 Rice</span>
                <span className="crop-item">🌽 Maize</span>
                <span className="crop-item">🌿 Wheat</span>
              </div>
            </div>
            <div className="result-card">
              <h4>Estimated Yield</h4>
              <div className="yield-display">3.2 tons/acre</div>
            </div>
            <div className="result-card">
              <h4>Expected Profit</h4>
              <div className="profit-display">₹45,000/acre</div>
            </div>
            <div className="result-card">
              <h4>Sustainability Score</h4>
              <div className="score-display">85%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Offline Capability Section */}
      <section className="offline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">📶 Offline Capability</h2>
            <p className="section-subtitle">
              Ensuring accessibility in rural areas with limited connectivity
            </p>
          </div>

          <div className="offline-features">
            <div className="offline-card">
              <div className="offline-icon">💾</div>
              <h3>Cached Data</h3>
              <p>App works offline with cached weather & soil data</p>
            </div>
            <div className="offline-card">
              <div className="offline-icon">📝</div>
              <h3>Data Entry</h3>
              <p>Farmers can still enter data and sync later</p>
            </div>
            <div className="offline-card">
              <div className="offline-icon">🔄</div>
              <h3>Auto Sync</h3>
              <p>Automatic synchronization when connectivity returns</p>
            </div>
            <div className="offline-card">
              <div className="offline-icon">📱</div>
              <h3>Lightweight</h3>
              <p>Optimized for low-end devices and slow connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Revolutionize Agriculture?</h2>
            <p>Join the agricultural transformation with Krishi AI</p>
            <div className="cta-buttons">
              <a href="/recommendation" className="btn-primary">
                <span>Get Started</span>
                <div className="btn-shine"></div>
              </a>
              <a href="/features" className="btn-secondary">
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;


