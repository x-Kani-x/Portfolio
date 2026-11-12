import React, { useState } from 'react';
import { slidesMeta, personalInfo } from '../data/portfolioData';
import { FileText, Send, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ currentSlide, onSelectSlide }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand / Name Logo */}
        <button 
          onClick={() => { onSelectSlide(0); setMobileMenuOpen(false); }}
          className="flex items-center space-x-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            KN
          </div>
          <div>
            <div className="font-bold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-brand-600 transition-colors">
              {personalInfo.name}
            </div>
            <div className="text-xs text-slate-500 hidden sm:block">
              CIT Chennai • CSE (2nd Year)
            </div>
          </div>
        </button>

        {/* Center Desktop Slide Nav Pills */}
        <nav className="hidden xl:flex items-center space-x-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 shadow-inner">
          {slidesMeta.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={slide.id}
                onClick={() => onSelectSlide(index)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-sm'
                    : 'text-slate-600 hover:text-brand-700 hover:bg-slate-200/60'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full transition-all -z-10 animate-fadeIn" />
                )}
                {slide.title}
              </button>
            );
          })}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="/resume.png"
            target="_blank"
            rel="noopener noreferrer"
            download="Kanishka_N_Resume.png"
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-brand-700 transition-all border border-slate-200"
          >
            <FileText className="w-3.5 h-3.5 text-brand-600" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => onSelectSlide(7)}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/20 hover:shadow-brand-600/35 transition-all transform hover:-translate-y-0.5"
          >
            <span>Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center space-x-2">
          <button
            onClick={() => onSelectSlide(7)}
            className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-600"
          >
            Connect
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-brand-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl animate-fadeIn">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
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
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 font-semibold border border-brand-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{slide.title}</span>
                <span className="text-xs text-slate-400">0{index + 1}</span>
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex items-center space-x-2">
            <a
              href="/resume.png"
              target="_blank"
              rel="noopener noreferrer"
              download="Kanishka_N_Resume.png"
              className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
            >
              Download Resume
            </a>
            <button
              onClick={() => {
                onSelectSlide(7);
                setMobileMenuOpen(false);
              }}
              className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
