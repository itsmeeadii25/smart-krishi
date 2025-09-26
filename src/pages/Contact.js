import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              Get in touch with our team for support, questions, or partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows="6"
                      required
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <div className="btn-shine"></div>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-header">
                <h2>Get in Touch</h2>
                <p>Multiple ways to reach us</p>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email Support</h3>
                    <p>For farmers' help, contact us at:</p>
                    <a href="mailto:support@krishiai.com" className="contact-link">
                      support@krishiai.com
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Phone Support</h3>
                    <p>Call us for immediate assistance:</p>
                    <a href="tel:+91-9876543210" className="contact-link">
                      +91-9876543210
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">💬</div>
                  <div className="method-content">
                    <h3>Live Chat</h3>
                    <p>Chat with our support team:</p>
                    <span className="contact-link">Available 24/7</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Office Address</h3>
                    <p>Visit our headquarters:</p>
                    <span className="contact-link">
                      New Delhi, India<br />
                      Krishi AI Headquarters
                    </span>
                  </div>
                </div>
              </div>

              <div className="support-hours">
                <h3>Support Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Emergency Support Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about Krishi AI</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How accurate are the crop recommendations?</h3>
              <p>Our AI algorithms achieve 95%+ accuracy in crop recommendations by analyzing comprehensive data including soil composition, weather patterns, and historical yield data.</p>
            </div>

            <div className="faq-item">
              <h3>Is Krishi AI available in multiple languages?</h3>
              <p>Yes! Krishi AI supports multiple regional languages including Hindi, English, Tamil, Telugu, and more to serve farmers across India.</p>
            </div>

            <div className="faq-item">
              <h3>Can I use Krishi AI offline?</h3>
              <p>Absolutely! We provide offline access to essential features, ensuring farmers in areas with poor connectivity can still benefit from our recommendations.</p>
            </div>

            <div className="faq-item">
              <h3>How much does Krishi AI cost?</h3>
              <p>Krishi AI offers both free and premium plans. Basic features are free, while advanced analytics and premium support are available with our subscription plans.</p>
            </div>

            <div className="faq-item">
              <h3>Do you provide training for farmers?</h3>
              <p>Yes! We offer comprehensive training programs, workshops, and educational resources to help farmers maximize the benefits of our platform.</p>
            </div>

            <div className="faq-item">
              <h3>How do I get technical support?</h3>
              <p>You can reach our technical support team through email, phone, live chat, or by visiting our support center. We're available 24/7 for urgent issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Farming?</h2>
            <p>Join thousands of farmers who are already maximizing their yields with Krishi AI</p>
            <div className="cta-buttons">
              <a href="/recommendation" className="btn-primary">
                <span>Get Started Now</span>
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

export default Contact;

