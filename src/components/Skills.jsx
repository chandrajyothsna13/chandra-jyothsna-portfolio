import React, { useState } from 'react';
import { technicalSkills } from '../data/portfolioData';
import { CodeIcon } from './Icons';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Languages', 'Frontend', 'Backend'];

  const filteredSkills = activeCategory === 'All'
    ? technicalSkills
    : technicalSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" style={{ background: 'rgba(15, 23, 42, 0.25)' }}>
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Technical Stack</div>
          <h2 className="section-title">
            Core Competencies & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A balanced skill set spanning systems programming, object-oriented software development, and modern responsive web technologies.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? 'All Skills' : cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="glass-card skill-card">
              <div>
                <div className="skill-top">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.12)',
                      color: '#38bdf8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CodeIcon className="w-5 h-5" />
                    </div>
                    <span className="skill-name" style={{ margin: 0 }}>{skill.name}</span>
                  </div>
                  <span className="skill-badge">{skill.category}</span>
                </div>

                <p className="skill-desc">
                  {skill.description}
                </p>
              </div>

              <div className="skill-bar-wrap">
                <div className="skill-bar-labels">
                  <span>Proficiency</span>
                  <span style={{ color: '#38bdf8' }}>{skill.level}</span>
                </div>
                <div className="skill-progress-track">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
