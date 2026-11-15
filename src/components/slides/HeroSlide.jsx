import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowRight, Download, Mail, Github, Linkedin, Code2, Award, Sparkles, Terminal } from 'lucide-react';

export default function HeroSlide({ onGoToSlide }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = personalInfo.typewriterTitles[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1700);
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
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Top Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Bio & CTAs */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-brand-50/90 dark:bg-brand-950/80 border border-brand-200/90 dark:border-brand-800/80 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-bold shadow-sm shadow-brand-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600" />
            </span>
            <span className="tracking-wide">{personalInfo.statusBadge}</span>
          </div>

          {/* Heading */}
          <div className="space-y-1.5">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Hello, I'm
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              <span className="bg-gradient-to-r from-brand-900 via-brand-700 to-brand-600 dark:from-white dark:via-brand-200 dark:to-brand-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <div className="text-base sm:text-xl font-bold text-brand-600 dark:text-brand-300">
              {personalInfo.title}
            </div>
          </div>

          {/* Typewriter Prompt */}
          <div className="flex items-center space-x-2.5 bg-brand-100/70 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/80 rounded-2xl px-4 py-2.5 font-mono text-xs sm:text-sm text-brand-950 dark:text-brand-200 shadow-inner">
            <Terminal className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
            <span className="text-brand-600 dark:text-brand-400 font-extrabold">&gt;</span>
            <span className="font-semibold text-slate-900 dark:text-white">{displayedText}</span>
            <span className="w-2 h-4 bg-brand-600 dark:bg-brand-400 animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
            {personalInfo.bio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={() => onGoToSlide(3)}
              className="shimmer-button inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 hover:from-brand-600 hover:to-brand-700 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/Kanishka_N_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Kanishka_N_Resume.pdf"
              className="glass-panel inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-brand-950 dark:text-brand-100 bg-brand-100/80 dark:bg-brand-950/60 hover:bg-brand-200/80 dark:hover:bg-brand-900/60 border border-brand-300/90 dark:border-brand-800/90 shadow-sm hover:border-brand-400 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => onGoToSlide(7)}
              className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-brand-800 dark:text-brand-300 hover:bg-brand-100/90 dark:hover:bg-brand-900/60 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Profiles & Quick Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
            <span className="font-bold text-brand-900 dark:text-slate-300 text-[11px] uppercase tracking-wider">Profiles:</span>
            
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-brand-100/80 dark:bg-brand-950/80 hover:bg-brand-200/80 dark:hover:bg-brand-900 text-brand-950 dark:text-brand-200 transition-all font-semibold border border-brand-200/90 dark:border-brand-800/80 shadow-sm hover:-translate-y-0.5"
            >
              <Github className="w-3.5 h-3.5 text-slate-800 dark:text-white" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-brand-100/80 dark:bg-brand-950/80 hover:bg-brand-200/80 dark:hover:bg-brand-900 text-brand-950 dark:text-brand-200 transition-all font-semibold border border-brand-200/90 dark:border-brand-800/80 shadow-sm hover:-translate-y-0.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={() => onGoToSlide(6)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-brand-100/90 dark:bg-brand-900/70 hover:bg-brand-200 dark:hover:bg-brand-800/80 text-brand-950 dark:text-brand-200 transition-all font-bold border border-brand-300/90 dark:border-brand-700/80 shadow-sm hover:-translate-y-0.5"
            >
              <Code2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>LeetCode 266+</span>
            </button>

            <button
              onClick={() => onGoToSlide(6)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-brand-100/80 dark:bg-brand-950/80 hover:bg-brand-200 dark:hover:bg-brand-900 text-brand-950 dark:text-brand-300 transition-all font-bold border border-brand-200/90 dark:border-brand-800/80 shadow-sm hover:-translate-y-0.5"
            >
              <Award className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>Skillrack 110+</span>
            </button>
          </div>

        </div>

        {/* Right Column: Prominent Portrait Frame with Multi-Tier Depth */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            
            {/* Background Multi-Layer Glow Ring in primary shades */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-brand-700 via-brand-500 to-brand-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 group-hover:duration-300 animate-pulseSubtle" />
            
            {/* Image Card Container with Specular Depth */}
            <div className="relative glass-panel p-3.5 sm:p-4 rounded-3xl border border-brand-200/90 dark:border-brand-700/70 overflow-hidden transform group-hover:scale-[1.015] transition-transform duration-500 shadow-2xl">
              <div className="w-64 h-72 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-brand-100 dark:bg-brand-950 relative shadow-inner">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Bottom Info Pill with Deep Frosted Glass */}
              <div className="absolute bottom-6 left-6 right-6 glass-dock px-3.5 py-2.5 rounded-2xl border border-brand-200/90 dark:border-brand-700/80 shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-slate-900 dark:text-white">{personalInfo.name}</div>
                  <div className="text-[11px] text-brand-600 dark:text-brand-300 font-semibold">{personalInfo.institution}</div>
                </div>
                <div className="text-[10px] font-extrabold px-2.5 py-1 rounded-lg bg-brand-100/90 dark:bg-brand-900/90 text-brand-800 dark:text-brand-200 border border-brand-300/80 dark:border-brand-700/80">
                  2nd Year CSE
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Metrics Bar */}
      <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-brand-200/70 dark:border-brand-800/60 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
        {personalInfo.metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="glass-card glass-card-hover p-3.5 sm:p-4 rounded-2xl border border-brand-200/70 dark:border-brand-800/60 text-left relative overflow-hidden group"
          >
            {/* Top decorative accent in primary brand color */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400 opacity-80" />

            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-baseline space-x-1">
              <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 dark:from-brand-300 dark:via-brand-400 dark:to-brand-200 bg-clip-text text-transparent">
                {metric.value}
              </span>
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-0.5">
              {metric.label}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-brand-300/70 truncate mt-0.5">
              {metric.sub}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
