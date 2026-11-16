import React from 'react';
import { coursesAndLearning } from '../data/portfolioData';
import { BookOpenIcon, CheckCircleIcon, SparklesIcon } from './Icons';

export const Learning = () => {
  return (
    <section id="learning" style={{ background: 'rgba(15, 23, 42, 0.25)' }}>
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Courses & Learning</div>
          <h2 className="section-title">
            Targeted Technical <span className="text-gradient">Coursework</span>
          </h2>
          <p className="section-subtitle">
            Focused study on core algorithmic problem solving, structured programming, and memory architecture.
          </p>
        </div>

        <div className="learning-grid">
          {coursesAndLearning.map((course) => (
            <div key={course.id} className="glass-card course-card">
              <div>
                <div className="course-header">
                  <div className="course-status-pill">{course.status}</div>
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-provider">{course.provider}</div>
                </div>

                <p className="course-desc">
                  {course.description}
                </p>

                <div>
                  <div className="topics-header">Key Competencies & Topics Mastered:</div>
                  <ul className="topics-list">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="topic-item">
                        <span className="topic-bullet">›</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: '#38bdf8'
              }}>
                <CheckCircleIcon className="w-4 h-4" />
                <span>Verified Academic & Practical Coursework</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
