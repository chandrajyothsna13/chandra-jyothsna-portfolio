import React from 'react';
import { personalInfo, education, navigationLinks } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <div className="brand-badge">{personalInfo.initials}</div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                {personalInfo.name}
              </span>
            </div>
            <p className="footer-desc">
              Computer Science Student & Aspiring Developer at {education.college}. Passionate about algorithms, React.js frontend development, and clean software architecture.
            </p>
          </div>

          <div>
            <ul className="footer-links">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-pill-link"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>B.Tech in {education.branch} ({education.period})</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#38bdf8',
                cursor: 'pointer',
                fontSize: '0.88rem',
                fontWeight: 600
              }}
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
