import React from 'react';
import { experienceList } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Building2 } from 'lucide-react';

export default function ExperienceSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-5 sm:mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1.5">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Slide 05 • Experience & Internships</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Practical Industry Experience
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
          Real-world problem solving through industrial internships and government-endorsed development programs.
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch text-left">
        {experienceList.map((exp, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Top Accent Bar in brand colors */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${
              idx === 0 
                ? 'bg-gradient-to-r from-brand-700 via-brand-600 to-brand-400' 
                : 'bg-gradient-to-r from-brand-800 via-brand-700 to-brand-500'
            }`} />

            <div>
              {/* Header Row */}
              <div className="flex items-start justify-between gap-3 mb-3 pt-1">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-brand-500 text-white flex items-center justify-center font-bold shadow-md shadow-brand-600/30">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-300">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-xl text-xs font-bold bg-brand-100/90 dark:bg-brand-950/90 text-brand-800 dark:text-brand-200 border border-brand-300/80 dark:border-brand-800/80 shadow-sm shrink-0">
                  {exp.badge}
                </span>
              </div>

              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-brand-900/80 dark:text-slate-400 mb-3.5 pb-3 border-b border-brand-200/80 dark:border-brand-900/60">
                <div className="flex items-center space-x-1.5 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center space-x-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-extrabold text-brand-700 dark:text-brand-400 uppercase tracking-widest">
                  Key Learnings & Deliverables
                </div>
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Tags */}
            <div className="pt-3.5 border-t border-brand-200/80 dark:border-brand-900/60">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-700 dark:text-slate-500 mb-1.5">
                Skills & Ecosystem
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-brand-100/90 dark:bg-brand-950 text-brand-950 dark:text-brand-300 border border-brand-200 dark:border-brand-800/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
