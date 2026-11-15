import React, { useState } from 'react';
import { slidesMeta, personalInfo } from '../data/portfolioData';
import { FileText, Menu, X, ArrowRight, Sun, Moon, Sparkles } from 'lucide-react';

export default function Navbar({ currentSlide, onSelectSlide, isDark, onToggleDark }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f5fe]/90 dark:bg-[#0e0721]/85 backdrop-blur-2xl border-b border-brand-200/90 dark:border-brand-900/60 shadow-sm shadow-brand-600/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand / Name Logo */}
        <button 
          onClick={() => { onSelectSlide(0); setMobileMenuOpen(false); }}
          className="flex items-center space-x-3 text-left group focus:outline-none"
        >
          <div className="relative">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden ring-2 ring-brand-400/50 shadow-lg shadow-brand-600/30 group-hover:scale-105 group-hover:shadow-brand-600/50 group-hover:ring-brand-500 transition-all duration-300 bg-brand-100 dark:bg-brand-900 flex items-center justify-center">
              <img
                src="/nav-avatar.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-brand-500 ring-2 ring-white dark:ring-brand-950 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          <div>
            <div className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              {personalInfo.name}
            </div>
            <div className="text-[11px] font-medium text-brand-800 dark:text-brand-300/80 hidden sm:flex items-center space-x-1">
              <span>CIT Chennai</span>
              <span>•</span>
              <span className="text-slate-500 dark:text-slate-400">CSE (2nd Year)</span>
            </div>
          </div>
        </button>

        {/* Center Desktop Slide Nav Pills */}
        <nav className="hidden xl:flex items-center space-x-1 bg-brand-100/80 dark:bg-brand-950/70 p-1.5 rounded-full border border-brand-200 dark:border-brand-800/60 shadow-inner">
          {slidesMeta.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={slide.id}
                onClick={() => onSelectSlide(index)}
                className={`relative px-3.5 py-1.5 text-xs rounded-full transition-all duration-300 flex items-center ${
                  isActive
                    ? 'bg-brand-200/95 dark:bg-brand-800/90 text-brand-950 dark:text-white font-black border border-brand-400/90 dark:border-brand-600 shadow-md shadow-brand-500/20 scale-[1.02]'
                    : 'text-brand-950/80 dark:text-brand-200 font-semibold hover:text-brand-950 dark:hover:text-white hover:bg-brand-200/60 dark:hover:bg-brand-900/50'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-700 dark:bg-brand-300 mr-1.5 animate-pulse" />
                )}
                <span>{slide.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action CTAs & Theme Toggle */}
        <div className="hidden sm:flex items-center space-x-2.5">
          
          {/* Theme Switcher Button */}
          <button
            onClick={onToggleDark}
            className="p-2.5 rounded-xl text-slate-700 dark:text-brand-200 bg-brand-100/90 dark:bg-brand-950/80 hover:bg-brand-200 dark:hover:bg-brand-900/80 transition-all border border-brand-200 dark:border-brand-800/80 shadow-sm hover:shadow-brand-500/20 active:scale-95"
            title={isDark ? "Switch to Atmospheric Light Theme" : "Switch to Midnight Violet Theme"}
            aria-label="Toggle visual theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-brand-300" /> : <Moon className="w-4 h-4 text-brand-700" />}
          </button>

          <a
            href="/Kanishka_N_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Kanishka_N_Resume.pdf"
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-brand-950 dark:text-brand-100 bg-brand-100/90 dark:bg-brand-950/70 hover:bg-brand-200/90 dark:hover:bg-brand-900/80 hover:text-brand-700 transition-all border border-brand-300/80 dark:border-brand-800/80 shadow-sm hover:shadow-brand-500/15"
          >
            <FileText className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => onSelectSlide(7)}
            className="shimmer-button inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 hover:from-brand-600 hover:to-brand-700 shadow-md shadow-brand-600/30 hover:shadow-brand-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center space-x-2">
          <button
            onClick={onToggleDark}
            className="p-2 rounded-xl text-slate-700 dark:text-brand-200 bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-brand-300" /> : <Moon className="w-4 h-4 text-brand-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-brand-200 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900 border border-brand-200/80 dark:border-brand-800/80 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#f8f5fe]/95 dark:bg-[#110829]/95 backdrop-blur-2xl border-b border-brand-200 dark:border-brand-800 px-4 pt-2 pb-6 space-y-1.5 shadow-2xl animate-fadeIn">
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 px-3 py-1">
            Slideshow Navigation
          </div>
          {slidesMeta.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(index);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-brand-200/90 dark:bg-brand-800/90 text-brand-950 dark:text-white font-black border border-brand-400/80 dark:border-brand-600 shadow-sm'
                    : 'text-brand-950/80 dark:text-brand-200 hover:bg-brand-100 dark:hover:bg-brand-900/60'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-700 dark:bg-brand-300 animate-pulse" />}
                  <span>{slide.title}</span>
                </div>
                <span className={`text-xs ${isActive ? 'text-brand-800 dark:text-brand-300 font-bold' : 'text-brand-400'}`}>0{index + 1}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-brand-200/60 dark:border-brand-800/60 flex items-center space-x-2">
            <a
              href="/Kanishka_N_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Kanishka_N_Resume.pdf"
              className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold text-brand-950 dark:text-brand-200 bg-brand-100 dark:bg-brand-950 border border-brand-200 dark:border-brand-800"
            >
              Download Resume
            </a>
            <button
              onClick={() => {
                onSelectSlide(7);
                setMobileMenuOpen(false);
              }}
              className="flex-1 text-center py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 shadow-md shadow-brand-600/30"
            >
              Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
