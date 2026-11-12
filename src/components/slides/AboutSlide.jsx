import React from 'react';
import { educationList } from '../../data/portfolioData';
import { GraduationCap, BookOpen, Award, MapPin, Calendar, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';

export default function AboutSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Slide 02 • Profile & Education</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About Me & Academic Foundation
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
          A 2nd-year Computer Science undergraduate with a passion for software craftsmanship, algorithmic rigor, and intelligent data systems.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: About Narrative & Personal Values */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm text-left space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Who I Am</h3>
                <p className="text-xs text-slate-500">Student & Technology Enthusiast</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              I am currently in my 2nd year of Bachelor of Engineering in Computer Science and Engineering at <strong>Chennai Institute of Technology</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              My curiosity centers on building practical, intelligent software: from <strong>AI-based scam detection</strong> to <strong>machine learning market predictors</strong> and <strong>cybersecurity assistants</strong>. I balance software building with strong problem-solving fundamentals, having completed <strong>412+ DSA problems</strong>.
            </p>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Institution</span>
                <span className="text-slate-800 font-bold">CIT Chennai</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Current Status</span>
                <span className="text-brand-600 font-bold">2nd Year B.E. CSE</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Location</span>
                <span className="text-slate-800 font-bold">Chennai, India</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Core Interest</span>
                <span className="text-slate-800 font-bold">Software & AI/ML</span>
              </div>
            </div>

          </div>

          {/* Quick Highlight Card */}
          <div className="bg-gradient-to-br from-brand-600 to-brand-800 text-white rounded-2xl p-5 text-left shadow-lg shadow-brand-700/20">
            <div className="flex items-center space-x-2 text-brand-200 text-xs font-semibold mb-2">
              <UserCheck className="w-4 h-4" />
              <span>Philosophy</span>
            </div>
            <div className="text-sm font-medium leading-relaxed text-brand-50">
              "Focusing on rock-solid fundamentals in algorithms and systems, while continuously exploring modern generative AI and cloud infrastructure."
            </div>
          </div>

        </div>

        {/* Right Column: Educational Timeline Cards */}
        <div className="lg:col-span-7 space-y-4 text-left">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                idx === 0 ? 'bg-brand-600' : 'bg-slate-300'
              }`} />

              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-1">
                    {edu.badge}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {edu.institution}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-brand-700">
                    {edu.degree}
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center px-3 py-1 rounded-xl bg-slate-100 text-slate-900 font-extrabold text-xs sm:text-sm border border-slate-200">
                    <Award className="w-3.5 h-3.5 text-brand-600 mr-1.5" />
                    <span>{edu.score}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-end space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                {edu.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
