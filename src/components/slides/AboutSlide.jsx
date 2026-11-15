import React from 'react';
import { educationList } from '../../data/portfolioData';
import { BookOpen, Award, Calendar, CheckCircle2, UserCheck, Sparkles, MapPin } from 'lucide-react';

export default function AboutSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-5 sm:mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Slide 02 • Profile & Education</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          About Me & Academic Foundation
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
          A 2nd-year Computer Science undergraduate with a passion for software craftsmanship, algorithmic rigor, and intelligent data systems.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        
        {/* Left Column: About Narrative & Personal Values */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          <div className="glass-card rounded-3xl p-5 sm:p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md text-left space-y-3.5 relative overflow-hidden">
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-brand-500 text-white flex items-center justify-center font-bold shadow-md shadow-brand-600/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Who I Am</h3>
                <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">Student & Technology Enthusiast</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              I am currently in my 2nd year of Bachelor of Engineering in Computer Science and Engineering at <strong className="text-slate-900 dark:text-white font-bold">Chennai Institute of Technology</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              My curiosity centers on building practical, intelligent software: from <strong className="text-brand-700 dark:text-brand-300 font-semibold">AI scam detection</strong> to <strong className="text-brand-700 dark:text-brand-300 font-semibold">market momentum models</strong> and <strong className="text-brand-700 dark:text-brand-300 font-semibold">cybersecurity assistants</strong>. I balance practical builds with strong fundamentals, having solved <strong className="text-brand-600 dark:text-brand-400 font-extrabold">412+ DSA problems</strong>.
            </p>

            <div className="pt-3 border-t border-brand-200/80 dark:border-brand-900/60 grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-brand-100/60 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/60">
                <span className="text-brand-800/70 dark:text-slate-400 block font-semibold text-[11px]">Institution</span>
                <span className="text-brand-950 dark:text-slate-100 font-black">CIT Chennai</span>
              </div>
              <div className="p-2.5 rounded-xl bg-brand-100/60 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/60">
                <span className="text-brand-800/70 dark:text-slate-400 block font-semibold text-[11px]">Current Status</span>
                <span className="text-brand-700 dark:text-brand-400 font-black">2nd Year B.E. CSE</span>
              </div>
              <div className="p-2.5 rounded-xl bg-brand-100/60 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/60">
                <span className="text-brand-800/70 dark:text-slate-400 block font-semibold text-[11px]">Location</span>
                <span className="text-brand-950 dark:text-slate-100 font-black flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-brand-600 inline" />
                  <span>Chennai, India</span>
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-brand-100/60 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/60">
                <span className="text-brand-800/70 dark:text-slate-400 block font-semibold text-[11px]">Core Focus</span>
                <span className="text-brand-950 dark:text-slate-100 font-black">Software & AI/ML</span>
              </div>
            </div>

          </div>

          {/* Philosophy Card with Deep Violet Gradient */}
          <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white rounded-3xl p-5 sm:p-6 text-left shadow-xl shadow-brand-950/30 border border-brand-500/30 relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-brand-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

            <div className="flex items-center space-x-2 text-brand-200 text-xs font-bold uppercase tracking-wider mb-2">
              <UserCheck className="w-4 h-4 text-brand-300" />
              <span>Engineering Mindset</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold leading-relaxed text-brand-50">
              "Focusing on rock-solid fundamentals in algorithms and systems, while continuously exploring modern generative AI, clean code architectures, and cloud services."
            </div>
          </div>

        </div>

        {/* Right Column: Educational Timeline Cards */}
        <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md relative overflow-hidden group"
            >
              {/* Top Accent Strip in brand colors */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                idx === 0 
                  ? 'bg-gradient-to-r from-brand-700 via-brand-600 to-brand-400' 
                  : 'bg-gradient-to-r from-brand-500/80 via-brand-400/80 to-brand-300/80 dark:from-brand-900 dark:to-brand-800'
              }`} />

              <div className="flex flex-wrap items-start justify-between gap-2 mb-2 pt-1">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wide bg-brand-100/90 dark:bg-brand-950/90 text-brand-800 dark:text-brand-300 border border-brand-300/80 dark:border-brand-800/80 mb-1.5">
                    {edu.badge}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-brand-700 dark:text-brand-300">
                    {edu.degree}
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-brand-100/90 dark:bg-brand-950 text-brand-950 dark:text-white font-black text-xs sm:text-sm border border-brand-300/90 dark:border-brand-800/90 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 mr-1.5" />
                    <span>{edu.score}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-500 mt-1 flex items-center justify-end space-x-1">
                    <Calendar className="w-3 h-3 text-brand-500" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-brand-100 dark:border-brand-900/60 space-y-1.5">
                {edu.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
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
