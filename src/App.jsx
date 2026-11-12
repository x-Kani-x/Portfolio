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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = slidesMeta.length;

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
      // Don't trigger slide change if user is typing in an input or textarea
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
    const minSwipeDistance = 60; // minimum pixels to trigger swipe

    if (diff > minSwipeDistance) {
      // Swiped Left -> go to Next Slide
      handleNext();
    } else if (diff < -minSwipeDistance) {
      // Swiped Right -> go to Prev Slide
      handlePrev();
    }
  };

  // Render appropriate slide component
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
      className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative overflow-x-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-100/60 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-violet-100/40 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#7c3aed 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Pinned Top Navigation */}
      <Navbar currentSlide={currentSlide} onSelectSlide={handleSelectSlide} />

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

      {/* Slideshow Presentation Controller (Side Arrows, Bottom Navigation Bar) */}
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
