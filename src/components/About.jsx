import React from 'react';
import { personalInfo, education } from '../data/portfolioData';
import { GraduationCapIcon, MapPinIcon, MailIcon, PhoneIcon, CheckCircleIcon } from './Icons';

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">About Me</div>
          <h2 className="section-title">
            Passionate About Building <span className="text-gradient">Impactful Solutions</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Science student combining strong theoretical computer science foundations with modern full-stack development practices.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Text Card */}
          <div className="glass-card about-text-card">
            <div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
                Professional Overview
              </h3>

              <p className="about-bio">
                I am currently in my <strong>3rd Year</strong> of pursuing a <strong>Bachelor of Technology (B.Tech)</strong> in <strong>Computer Science and Engineering (CIC)</strong> at <strong>VVITU</strong>, maintaining a <strong>7.5 CGPA</strong> with an anticipated graduation in <strong>2028</strong>.
              </p>

              <p className="about-bio">
                My engineering journey is driven by curiosity and discipline. Through rigorous coursework in <em>Data Structures and Algorithms with Java</em> and <em>Programming Fundamentals with C</em>, I have developed solid problem-solving skills, memory-efficient coding practices, and an analytical approach to software development.
              </p>

              <p className="about-bio">
                Complementing my core programming foundation, I build modern, responsive web interfaces using <strong>React.js, HTML5, CSS3, and JavaScript</strong>, alongside backend development with <strong>Express.js</strong>. I am eager to bring this versatility to innovative engineering teams through challenging internships and collaborative developer roles.
              </p>
            </div>

            <ul className="about-checklist">
              <li className="about-check-item">
                <CheckCircleIcon className="about-check-icon" />
                <span>Strong problem-solving foundation in Data Structures and Algorithms with Java.</span>
              </li>
              <li className="about-check-item">
                <CheckCircleIcon className="about-check-icon" />
                <span>Deep understanding of procedural logic and memory concepts via C programming.</span>
              </li>
              <li className="about-check-item">
                <CheckCircleIcon className="about-check-icon" />
                <span>Hands-on experience developing modular, responsive SPAs with React.js & Vite.</span>
              </li>
              <li className="about-check-item">
                <CheckCircleIcon className="about-check-icon" />
                <span>Actively preparing for technical interviews, internships, and full-time developer placements.</span>
              </li>
            </ul>
          </div>

          {/* Right Info Cards Column */}
          <div className="info-cards-column">
            <div className="info-row-item">
              <div className="info-icon-box">
                <GraduationCapIcon />
              </div>
              <div>
                <div className="info-content-label">Education</div>
                <div className="info-content-value">B.Tech - CSE (CIC), VVITU</div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.15rem' }}>
                  3rd Year • Class of 2028 • CGPA: 7.5
                </div>
              </div>
            </div>

            <div className="info-row-item">
              <div className="info-icon-box">
                <MapPinIcon />
              </div>
              <div>
                <div className="info-content-label">Location</div>
                <div className="info-content-value">{personalInfo.location}</div>
              </div>
            </div>

            <div className="info-row-item">
              <div className="info-icon-box">
                <MailIcon />
              </div>
              <div>
                <div className="info-content-label">Email Address</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="info-content-value"
                  style={{ textDecoration: 'none', color: '#38bdf8' }}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="info-row-item">
              <div className="info-icon-box">
                <PhoneIcon />
              </div>
              <div>
                <div className="info-content-label">Phone</div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="info-content-value"
                  style={{ textDecoration: 'none', color: '#f1f5f9' }}
                >
                  {personalInfo.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', marginTop: '0.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.05em' }}>
                  Career Goal
                </span>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600 }}>
                  2026-2028
                </span>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Seeking software engineering and full-stack internships to apply technical knowledge, solve real-world problems, and grow into a full-fledged software engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
