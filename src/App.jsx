import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Learning } from './components/Learning';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Learning />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
