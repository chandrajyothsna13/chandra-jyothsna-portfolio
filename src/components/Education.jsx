import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCapIcon, AwardIcon, CalendarIcon, CheckCircleIcon } from './Icons';

export const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Academic Background</div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal undergraduate training in Computer Science and Engineering, focusing on computational theory and software architecture.
          </p>
        </div>

        <div className="education-container">
          <div className="glass-card edu-card">
            <div className="edu-badge-top">
              <CalendarIcon className="w-4 h-4" />
              <span>{education.period} • In Progress</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="edu-college-name">{education.college}</h3>
                <div style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {education.collegeFullName}
                </div>
                <div className="edu-degree-branch">
                  {education.degree} in {education.branch}
                </div>
              </div>

              <div style={{
                padding: '0.85rem 1.5rem',
                borderRadius: '16px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.05em' }}>
                  Cumulative GPA
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8', lineHeight: 1.2 }}>
                  {education.cgpa} <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500 }}>/ 10</span>
                </div>
              </div>
            </div>

            <div className="edu-meta-grid">
              <div className="edu-meta-box">
                <span className="edu-meta-label">Current Academic Standing</span>
                <span className="edu-meta-val">{education.currentYear} Undergraduate</span>
              </div>

              <div className="edu-meta-box">
                <span className="edu-meta-label">Expected Graduation</span>
                <span className="edu-meta-val">Class of {education.graduationYear}</span>
              </div>

              <div className="edu-meta-box">
                <span className="edu-meta-label">Major & Discipline</span>
                <span className="edu-meta-val">Computer Science & Engineering</span>
              </div>

              <div className="edu-meta-box">
                <span className="edu-meta-label">Specialization Track</span>
                <span className="edu-meta-val" style={{ color: '#818cf8' }}>CIC Track</span>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '1rem' }}>
                Academic Curriculum Highlights
              </h4>
              <ul className="edu-highlights-list">
                {education.highlights.map((highlight, index) => (
                  <li key={index} className="edu-highlight-item">
                    <CheckCircleIcon className="w-4 h-4" style={{ color: '#38bdf8', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
