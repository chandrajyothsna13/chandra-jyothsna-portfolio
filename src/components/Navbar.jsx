import React, { useState, useEffect } from 'react';
import { personalInfo, navigationLinks } from '../data/portfolioData';
import { MenuIcon, CloseIcon, SparklesIcon } from './Icons';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll spy
      const sections = navigationLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-wrap ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <a href="#home" className="brand-logo">
              <div className="brand-badge">{personalInfo.initials}</div>
              <span>{personalInfo.name}</span>
            </a>

            <nav>
              <ul className="nav-links">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}>
                <SparklesIcon className="w-4 h-4" />
                <span>Connect</span>
              </a>

              <button
                className="nav-mobile-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
          aria-label="Close Menu"
        >
          <CloseIcon />
        </button>
        <ul className="mobile-nav-links">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
