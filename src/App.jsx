import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import CareerGoal from './components/CareerGoal';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioHome() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky Responsive Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <WhyWorkWithMe />
        <CareerGoal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="*" element={<PortfolioHome />} />
      </Routes>
    </Router>
  );
}
