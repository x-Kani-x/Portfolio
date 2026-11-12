import React from 'react';
import { experienceList } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, ShieldCheck, Building2, Code2 } from 'lucide-react';

export default function ExperienceSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Slide 05 • Experience & Internships</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Practical Industry Experience
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
          Real-world problem solving through industrial internships and government-endorsed development programs.
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch text-left">
        {experienceList.map((exp, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Accent Bar */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${
              idx === 0 ? 'bg-brand-600' : 'bg-indigo-600'
            }`} />

            <div>
              {/* Header Row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-brand-600">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {exp.badge}
                </span>
              </div>

              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-600" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2 mb-4">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Key Learnings & Deliverables
                </div>
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Tags */}
            <div className="pt-3 border-t border-slate-100">
              <div className="text-[11px] font-semibold text-slate-400 mb-1.5">
                Skills & Ecosystem
              </div>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
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

