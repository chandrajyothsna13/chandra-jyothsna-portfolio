import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, SendIcon, CheckCircleIcon } from './Icons';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger direct email composition
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Hello Chandra Jyothsna,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`);
    
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Get In Touch</div>
          <h2 className="section-title">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, project collaboration, or general inquiry, feel free to reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="glass-card contact-info-panel">
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Contact Information
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                I am actively seeking developer internships and welcome inquiries regarding potential technical roles.
              </p>

              <div className="contact-items-stack">
                <a href={`mailto:${personalInfo.email}`} className="contact-item-card">
                  <div className="contact-icon-box">
                    <MailIcon />
                  </div>
                  <div>
                    <div className="contact-item-label">Direct Email</div>
                    <div className="contact-item-value">{personalInfo.email}</div>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="contact-item-card">
                  <div className="contact-icon-box">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="contact-item-label">Phone Call & WhatsApp</div>
                    <div className="contact-item-value">{personalInfo.phoneFormatted}</div>
                  </div>
                </a>

                <div className="contact-item-card">
                  <div className="contact-icon-box">
                    <MapPinIcon />
                  </div>
                  <div>
                    <div className="contact-item-label">Current Location</div>
                    <div className="contact-item-value">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '1rem' }}>
                Social Profiles
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, minWidth: '130px' }}
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, minWidth: '130px' }}
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Send a Message
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Fill out the form below to draft and send a message directly to my inbox.
            </p>

            {submitted && (
              <div className="form-feedback" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircleIcon className="w-5 h-5" />
                <span>Your default email client has been opened to send this message. Thank you!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Inquiry"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', width: '100%' }}>
                <SendIcon className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
