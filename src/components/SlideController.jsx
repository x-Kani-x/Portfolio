import React from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';
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
          className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-brand-600 text-slate-700 hover:text-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-brand-500/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Right Floating Chevron (Next Slide) */}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={onNext}
          aria-label="Next Slide"
          className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-brand-600 text-slate-700 hover:text-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-brand-500/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none"
        >
          <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Bottom Floating Presentation Control Dock */}
      <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw] pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 shadow-xl shadow-slate-900/10 flex items-center space-x-2 sm:space-x-4">
          
          {/* Quick Prev Button */}
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className={`p-1.5 rounded-full transition-colors ${
              currentSlide === 0
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:bg-slate-100 hover:text-brand-600'
            }`}
            title="Previous Slide (←)"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="flex items-center space-x-1.5">
            {slidesMeta.map((_, index) => {
              const isActive = currentSlide === index;
              return (
                <button
                  key={index}
                  onClick={() => onSelectSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'w-6 sm:w-8 bg-brand-600 shadow-sm'
                      : 'w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300'
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
            className={`p-1.5 rounded-full transition-colors ${
              currentSlide === totalSlides - 1
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:bg-slate-100 hover:text-brand-600'
            }`}
            title="Next Slide (→)"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          {/* Slide Counter & Label */}
          <div className="hidden sm:flex items-center space-x-2 text-xs font-medium text-slate-500">
            <span className="font-semibold text-brand-700">
              0{currentSlide + 1}
            </span>
            <span>/</span>
            <span>0{totalSlides}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700 font-semibold truncate max-w-[140px]">
              {currentMeta.title}
            </span>
          </div>

        </div>
      </div>
    </>
  );
}
