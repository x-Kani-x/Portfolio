import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink, Code2, Award, Sparkles, Terminal } from 'lucide-react';

export default function HeroSlide({ onGoToSlide }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = personalInfo.typewriterTitles[currentTextIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % personalInfo.typewriterTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      
      {/* Top Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Bio & CTAs */}
        <div className="lg:col-span-7 space-y-5 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold shadow-sm animate-pulseSubtle">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-ping" />
            <span>{personalInfo.statusBadge}</span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <div className="text-sm sm:text-base font-semibold text-slate-500 tracking-wide">
              Hello, I'm
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-lg sm:text-xl font-bold text-brand-600">
              {personalInfo.title}
            </div>
          </div>

          {/* Typewriter Prompt */}
          <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-slate-800 shadow-inner">
            <Terminal className="w-4 h-4 text-brand-600 shrink-0" />
            <span className="text-brand-600 font-bold">&gt;</span>
            <span className="font-medium text-slate-900">{displayedText}</span>
            <span className="w-2 h-4 bg-brand-600 animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            {personalInfo.bio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onGoToSlide(3)}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/25 hover:shadow-brand-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/resume.png"
              target="_blank"
              rel="noopener noreferrer"
              download="Kanishka_N_Resume.png"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all hover:border-brand-300 hover:text-brand-700"
            >
              <Download className="w-4 h-4 text-brand-600" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => onGoToSlide(7)}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Profiles & Quick Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Profiles:</span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors font-medium border border-slate-200"
            >
              <Github className="w-3.5 h-3.5 text-slate-800" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors font-medium border border-slate-200"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => onGoToSlide(6)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 transition-colors font-medium border border-amber-200"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-600" />
              <span>LeetCode 266+</span>
            </button>
            <button
              onClick={() => onGoToSlide(6)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-800 transition-colors font-medium border border-brand-200"
            >
              <Award className="w-3.5 h-3.5 text-brand-600" />
              <span>Skillrack 110+</span>
            </button>
          </div>

        </div>

        {/* Right Column: Prominent Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            
            {/* Background Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600 via-brand-400 to-indigo-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500 group-hover:duration-200" />
            
            {/* Image Card Container */}
            <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-300">
              <div className="w-64 h-72 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to initial avatar if path fails
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              {/* Floating Bottom Info Pill */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-200/90 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{personalInfo.name}</div>
                  <div className="text-[11px] text-brand-600 font-medium">{personalInfo.institution}</div>
                </div>
                <div className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 border border-brand-200">
                  2nd Year CSE
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Metrics Bar */}
      <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {personalInfo.metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="p-3 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-brand-300 hover:bg-white transition-all text-left"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-baseline space-x-1">
              <span className="text-brand-600">{metric.value}</span>
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">
              {metric.label}
            </div>
            <div className="text-[11px] text-slate-500 truncate mt-0.5">
              {metric.sub}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
