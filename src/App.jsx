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
import { useLeetCodeStats } from './hooks/useLeetCodeStats';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark';
  });

  const leetCodeStats = useLeetCodeStats();

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
        return <HeroSlide onGoToSlide={handleSelectSlide} leetCodeStats={leetCodeStats} />;
      case 1:
        return <AboutSlide leetCodeStats={leetCodeStats} />;
      case 2:
        return <SkillsSlide />;
      case 3:
        return <ProjectsSlide />;
      case 4:
        return <ExperienceSlide />;
      case 5:
        return <CertificationsSlide />;
      case 6:
        return <AchievementsSlide leetCodeStats={leetCodeStats} />;
      case 7:
        return <ContactSlide />;
      default:
        return <HeroSlide onGoToSlide={handleSelectSlide} leetCodeStats={leetCodeStats} />;
    }
  };

  return (
    <div 
      className={`min-h-screen ${
        isDark ? 'bg-[#0c071b] text-slate-100' : 'bg-gradient-to-br from-[#f2ebff] via-[#f7f2ff] to-[#eae0fe] text-slate-900'
      } flex flex-col relative overflow-x-hidden select-none transition-colors duration-500`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Rich Atmospheric Background Orbs & Grids */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        
        {/* Layer 1: Ambient Floating Gradient Orbs in primary brand shades */}
        <div className="absolute -top-28 -left-28 w-[580px] h-[580px] bg-gradient-to-br from-brand-400/35 via-brand-300/30 to-brand-500/15 dark:from-brand-600/25 dark:via-brand-500/20 dark:to-transparent rounded-full blur-[110px] animate-floatSlow" />
        
        <div className="absolute top-1/4 -right-28 w-[520px] h-[520px] bg-gradient-to-bl from-brand-500/30 via-brand-300/30 to-brand-600/15 dark:from-brand-700/25 dark:via-brand-400/20 dark:to-transparent rounded-full blur-[120px] animate-floatReverse" />
        
        <div className="absolute -bottom-36 left-1/4 w-[640px] h-[640px] bg-gradient-to-tr from-brand-600/30 via-brand-400/25 to-brand-300/15 dark:from-brand-800/25 dark:via-brand-500/20 dark:to-transparent rounded-full blur-[130px] animate-floatSlow" />

        {/* Dynamic Center Ambient Bloom that rotates with current slide */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-gradient-to-r from-brand-400/25 via-brand-500/25 to-brand-300/25 dark:from-brand-700/15 dark:via-brand-500/15 dark:to-brand-600/15 rounded-full blur-[140px] transition-all duration-700 pointer-events-none"
          style={{
            transform: `translate(-50%, -50%) rotate(${currentSlide * 45}deg)`
          }}
        />

        {/* Layer 2: Tech Blueprint Grid with Vignette */}
        <div className="absolute inset-0 tech-grid-bg opacity-80" />

        {/* Layer 3: Floating Ambient Particles in primary brand shades */}
        <div className="absolute top-20 left-[18%] w-2 h-2 rounded-full bg-brand-500/60 shadow-sm shadow-brand-400 animate-pulse" />
        <div className="absolute top-1/3 right-[22%] w-2.5 h-2.5 rounded-full bg-brand-600/50 shadow-sm shadow-brand-500 animate-pulseSubtle" />
        <div className="absolute bottom-1/4 left-[30%] w-2 h-2 rounded-full bg-brand-400/60 shadow-sm shadow-brand-300 animate-pulse" />
        <div className="absolute bottom-32 right-[18%] w-3 h-3 rounded-full bg-brand-500/50 shadow-sm shadow-brand-500 animate-floatGentle" />
        <div className="absolute top-2/3 left-[12%] w-2 h-2 rounded-full bg-brand-500/40 animate-pulseSubtle" />

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
