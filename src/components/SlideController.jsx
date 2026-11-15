import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slidesMeta } from '../data/portfolioData';

export default function SlideController({ currentSlide, totalSlides, onPrev, onNext, onSelectSlide }) {
  const currentMeta = slidesMeta[currentSlide] || slidesMeta[0];

  return (
    <>
      {/* Left Floating Chevron (Previous Slide) */}
      {currentSlide > 0 && (
        <button
          onClick={onPrev}
          aria-label="Previous Slide"
          className="fixed left-2 sm:left-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl glass-panel hover:bg-brand-600 dark:hover:bg-brand-600 text-slate-700 dark:text-brand-200 hover:text-white dark:hover:text-white border border-brand-200/80 dark:border-brand-800/80 shadow-lg shadow-brand-900/10 hover:shadow-brand-500/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Right Floating Chevron (Next Slide) */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={onNext}
          aria-label="Next Slide"
          className="fixed right-2 sm:right-5 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl glass-panel hover:bg-brand-600 dark:hover:bg-brand-600 text-slate-700 dark:text-brand-200 hover:text-white dark:hover:text-white border border-brand-200/80 dark:border-brand-800/80 shadow-lg shadow-brand-900/10 hover:shadow-brand-500/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Bottom Floating Presentation Control Dock */}
      <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw] pointer-events-auto">
        <div className="glass-dock px-3 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center space-x-2 sm:space-x-3.5">
          
          {/* Quick Prev Button */}
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className={`p-1.5 rounded-full transition-all duration-200 ${
              currentSlide === 0
                ? 'text-brand-300/60 dark:text-slate-700 cursor-not-allowed opacity-40'
                : 'text-brand-800 dark:text-brand-300 hover:bg-brand-200/80 dark:hover:bg-brand-900/70 hover:text-brand-950 active:scale-90'
            }`}
            title="Previous Slide (←)"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {slidesMeta.map((_, index) => {
              const isActive = currentSlide === index;
              return (
                <button
                  key={index}
                  onClick={() => onSelectSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'w-7 sm:w-9 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 shadow-md shadow-brand-500/50'
                      : 'w-2 sm:w-2.5 bg-brand-300 dark:bg-brand-900/80 hover:bg-brand-400 dark:hover:bg-brand-700'
                  }`}
                  title={`Slide 0${index + 1}: ${slidesMeta[index].title}`}
                />
              );
            })}
          </div>

          {/* Quick Next Button */}
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className={`p-1.5 rounded-full transition-all duration-200 ${
              currentSlide === totalSlides - 1
                ? 'text-brand-300/60 dark:text-slate-700 cursor-not-allowed opacity-40'
                : 'text-brand-800 dark:text-brand-300 hover:bg-brand-200/80 dark:hover:bg-brand-900/70 hover:text-brand-950 active:scale-90'
            }`}
            title="Next Slide (→)"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="h-4 w-px bg-brand-300/80 dark:border-brand-800/80 hidden sm:block" />

          {/* Slide Counter & Label */}
          <div className="hidden sm:flex items-center space-x-2 text-xs font-medium">
            <span className="font-extrabold px-2 py-0.5 rounded-md bg-brand-200/90 dark:bg-brand-950/80 text-brand-900 dark:text-brand-300 border border-brand-300 dark:border-brand-800/60 text-[11px]">
              0{currentSlide + 1}
            </span>
            <span className="text-brand-400/80 dark:text-brand-400/60 font-bold">/</span>
            <span className="text-brand-800/80 dark:text-brand-300/80 font-bold text-[11px]">0{totalSlides}</span>
            <span className="text-brand-400 dark:text-brand-700">•</span>
            <span className="text-brand-950 dark:text-brand-100 font-extrabold tracking-tight truncate max-w-[130px]">
              {currentMeta.title}
            </span>
          </div>

        </div>
      </div>
    </>
  );
}
