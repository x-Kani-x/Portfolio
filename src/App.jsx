import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import SlideController from './components/SlideController';
import HeroSlide from './components/slides/HeroSlide';
import AboutSlide from './components/slides/AboutSlide';
import SkillsSlide from './components/slides/SkillsSlide';
import ProjectsSlide from './components/slides/ProjectsSlide';
import ExperienceSlide from './components/slides/ExperienceSlide';
import CertificationsSlide from './components/slides/CertificationsSlide';
import AchievementsSlide from './components/slides/AchievementsSlide';
import ContactSlide from './components/slides/ContactSlide';
import { slidesMeta } from './data/portfolioData';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark';
  });

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const totalSlides = slidesMeta.length;

  // Toggle Theme
  const handleToggleDark = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setSlideDirection('next');
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setSlideDirection('prev');
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleSelectSlide = (targetIndex) => {
    if (targetIndex === currentSlide) return;
    setSlideDirection(targetIndex > currentSlide ? 'next' : 'prev');
    setCurrentSlide(targetIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      } else if (e.key === 'Home') {
        handleSelectSlide(0);
      } else if (e.key === 'End') {
        handleSelectSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  // Touch navigation (mobile/tablet swipe)
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 60;

    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }
  };

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 0:
        return <HeroSlide onGoToSlide={handleSelectSlide} />;
      case 1:
        return <AboutSlide />;
      case 2:
        return <SkillsSlide />;
      case 3:
        return <ProjectsSlide />;
      case 4:
        return <ExperienceSlide />;
      case 5:
        return <CertificationsSlide />;
      case 6:
        return <AchievementsSlide />;
      case 7:
        return <ContactSlide />;
      default:
        return <HeroSlide onGoToSlide={handleSelectSlide} />;
    }
  };

  return (
    <div 
      className={`min-h-screen ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-[#FAF8FF] text-slate-900'
      } flex flex-col relative overflow-x-hidden select-none transition-colors duration-500`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Rich Atmospheric Background Orbs & Grids */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        
        {/* Layer 1: Ambient Floating Gradient Orbs */}
        <div className="absolute -top-24 -left-24 w-[540px] h-[540px] bg-gradient-to-br from-brand-500/20 via-indigo-500/15 to-transparent rounded-full blur-[100px] animate-floatSlow" />
        
        <div className="absolute top-1/4 -right-24 w-[480px] h-[480px] bg-gradient-to-bl from-indigo-500/20 via-purple-500/15 to-transparent rounded-full blur-[110px] animate-floatReverse" />
        
        <div className="absolute -bottom-32 left-1/4 w-[620px] h-[620px] bg-gradient-to-tr from-fuchsia-500/15 via-brand-400/15 to-transparent rounded-full blur-[120px] animate-floatSlow" />

        {/* Dynamic Center Ambient Bloom that changes with current slide */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-violet-600/10 via-brand-500/10 to-indigo-600/10 rounded-full blur-[130px] transition-all duration-700"
          style={{
            transform: `translate(-50%, -50%) rotate(${currentSlide * 45}deg)`
          }}
        />

        {/* Layer 2: Tech Blueprint Grid with Vignette */}
        <div className="absolute inset-0 tech-grid-bg opacity-70" />

        {/* Layer 3: Floating Ambient Particles (Subtle high-tech depth) */}
        <div className="absolute top-20 left-1/5 w-1.5 h-1.5 rounded-full bg-brand-500/40 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-indigo-500/30 animate-pulseSubtle" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-fuchsia-500/30 animate-pulse" />
        <div className="absolute bottom-32 right-1/5 w-2 h-2 rounded-full bg-brand-400/40 animate-pulseSubtle" />

      </div>

      {/* Pinned Top Navigation */}
      <Navbar 
        currentSlide={currentSlide} 
        onSelectSlide={handleSelectSlide} 
        isDark={isDark}
        onToggleDark={handleToggleDark}
      />

      {/* Main Presentation Viewport */}
      <main className="flex-1 pt-16 sm:pt-20 pb-20 sm:pb-24 flex items-center justify-center relative w-full">
        <div 
          key={currentSlide}
          className={`w-full h-full flex items-center justify-center ${
            slideDirection === 'next' ? 'animate-slideLeft' : 'animate-slideRight'
          }`}
        >
          {renderCurrentSlide()}
        </div>
      </main>

      {/* Slideshow Presentation Controller */}
      <SlideController
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectSlide={handleSelectSlide}
      />
    </div>
  );
}
