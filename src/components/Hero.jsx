import React, { useState, useEffect } from 'react';
import { personalInfo, education } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, ArrowRightIcon, SparklesIcon } from './Icons';

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const titles = personalInfo.titles;
    const currentFullText = titles[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText === currentFullText) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1600);
          setTypingSpeed(50);
        } else {
          setTypingSpeed(100);
        }
      } else {
        // Deleting backward
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(120);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);

  const handleDownloadResume = () => {
    // Generate a formatted printable profile / resume text or download document
    const resumeText = `=====================================================
CHANDRA JYOTHSNA - CURRICULUM VITAE
Computer Science Student & Aspiring Developer
=====================================================

CONTACT INFORMATION:
- Email: ${personalInfo.email}
- Phone: ${personalInfo.phone}
- Location: ${personalInfo.location}
- GitHub: ${personalInfo.github}
- LinkedIn: ${personalInfo.linkedin}

ACADEMIC PROFILE:
- Degree: ${education.degree} in ${education.branch}
- Institution: ${education.collegeFullName}
- Current Year: ${education.currentYear} (Class of ${education.graduationYear})
- Cumulative GPA: ${education.cgpa} / 10.0

TECHNICAL SKILLS:
- Programming Languages: C, Java, Python, JavaScript
- Web Technologies: HTML5, CSS3, React.js, Express.js, Node.js
- Core Foundations: Data Structures & Algorithms, Object-Oriented Programming (OOP)

COURSES & LEARNING:
1. Data Structures and Algorithms with Java
2. Programming Fundamentals with C

CAREER OBJECTIVE:
Diligent and motivated 3rd-year Computer Science student seeking internship 
and entry-level opportunities to apply technical skills in frontend, full-stack, 
and algorithmic problem solving within high-impact engineering teams.
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Chandra_Jyothsna_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro */}
          <div>
            <div className="status-pill">
              <span className="status-dot"></span>
              <span>{personalInfo.availability}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <div className="typing-container">
              <span>{displayedText}</span>
              <span className="typing-cursor"></span>
            </div>

            <p className="hero-description">
              3rd-year Computer Science undergraduate at <strong style={{ color: '#f8fafc' }}>{education.college}</strong>, specializing in <span style={{ color: '#38bdf8' }}>{education.branch}</span> with a CGPA of <strong style={{ color: '#38bdf8' }}>{education.cgpa}</strong>. Passionate about writing clean code, mastering Data Structures & Algorithms, and building modern, responsive web experiences.
            </p>

            <div className="hero-cta-group">
              <a href="#contact" className="btn btn-primary">
                <span>Get In Touch</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <button onClick={handleDownloadResume} className="btn btn-secondary" title="Download Resume Overview">
                <DownloadIcon className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a href="#skills" className="btn btn-outline">
                <span>View Skills</span>
              </a>
            </div>

            <div className="social-pills">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-link"
              >
                <GithubIcon />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-link"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-pill-link"
              >
                <MailIcon />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div>
            <div className="hero-visual-card">
              <div className="avatar-badge-wrap">
                <div className="avatar-inner">
                  {personalInfo.initials}
                </div>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>
                  {personalInfo.name}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                  {education.college} • {education.branch}
                </p>
              </div>

              <div className="hero-stats-grid">
                <div className="hero-stat-item">
                  <div className="hero-stat-val text-gradient-cyan">{education.cgpa}</div>
                  <div className="hero-stat-lbl">CGPA</div>
                </div>

                <div className="hero-stat-item">
                  <div className="hero-stat-val" style={{ color: '#818cf8' }}>{education.currentYear}</div>
                  <div className="hero-stat-lbl">B.Tech Standing</div>
                </div>

                <div className="hero-stat-item">
                  <div className="hero-stat-val" style={{ color: '#c084fc' }}>{education.graduationYear}</div>
                  <div className="hero-stat-lbl">Graduation</div>
                </div>

                <div className="hero-stat-item">
                  <div className="hero-stat-val text-gradient">8+</div>
                  <div className="hero-stat-lbl">Tech Skills</div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.82rem' }}>
                <SparklesIcon className="w-4 h-4" style={{ color: '#38bdf8' }} />
                <span>Ready for Software Engineering Internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
