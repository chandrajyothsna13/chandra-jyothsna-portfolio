import React from 'react';
import { personalInfo, projectsPlaceholder } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon, CodeIcon, SparklesIcon } from './Icons';

export const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Projects Showcase</div>
          <h2 className="section-title">
            Featured Work & <span className="text-gradient">Architectures</span>
          </h2>
          <p className="section-subtitle">
            A modular project showcase section prepared to feature live applications, open-source repositories, and technical implementations.
          </p>
        </div>

        <div className="projects-grid">
          {projectsPlaceholder.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div>
                <div className="project-status-bar">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CodeIcon className="w-4 h-4" style={{ color: '#818cf8' }} />
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>Architecture Track</span>
                  </div>
                  <span className="project-badge">{project.status}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-note">
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>Note: </span>
                {project.note}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Call to Action Box */}
        <div className="projects-cta-box">
          <div style={{ display: 'inline-flex', padding: '0.6rem', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', marginBottom: '1rem' }}>
            <GithubIcon className="w-8 h-8" />
          </div>
          <h3 className="projects-cta-title">Looking for Ongoing Code Repositories?</h3>
          <p className="projects-cta-desc">
            Explore active programming code, coursework exercises, and upcoming open-source projects directly on my official GitHub profile.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <GithubIcon />
            <span>Visit GitHub Profile</span>
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
