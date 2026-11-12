import React from 'react';
import { achievements } from '../../data/portfolioData';
import { Trophy, Code2, Flame, Award, ExternalLink, CheckCircle2, TrendingUp, Target } from 'lucide-react';

export default function AchievementsSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
          <Trophy className="w-3.5 h-3.5" />
          <span>Slide 07 • Algorithmic Rigor</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Competitive Coding & Achievements
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
          Continuous algorithmic practice to sharpen time complexity analysis, memory optimization, and structured problem solving.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch text-left">
        
        {/* Left Column: Big Total Milestone Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          <div className="bg-gradient-to-br from-brand-700 via-brand-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-700/20 relative overflow-hidden">
            {/* Background watermarks */}
            <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-2xl" />
            <Trophy className="absolute right-4 top-4 w-20 h-20 text-white/10" />

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm mb-4">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>Milestone Achieved</span>
            </div>

            <div className="space-y-1">
              <div className="text-5xl sm:text-6xl font-black tracking-tight text-white">
                412+
              </div>
              <div className="text-lg font-bold text-brand-100">
                DSA Problems Solved
              </div>
              <p className="text-xs sm:text-sm text-brand-200 pt-2 leading-relaxed">
                Active problem solving spanning LeetCode, Skillrack, and Codeforces competitions with clean C++ and Python implementations.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/20 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-brand-200 block text-[11px]">Primary Focus</span>
                <span className="font-bold text-white text-sm">Data Structures & Algo</span>
              </div>
              <div>
                <span className="text-brand-200 block text-[11px]">Core Languages</span>
                <span className="font-bold text-white text-sm">Python, C++, C</span>
              </div>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-3">
            {achievements.stats.map((s, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">{s.value}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Platform Breakdown Cards */}
        <div className="lg:col-span-7 space-y-4">
          {achievements.platforms.map((platform, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-900 text-lg">
                    {platform.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600">
                    Platform
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {platform.description}
                </p>
                <div className="flex items-center space-x-3 text-xs text-slate-500 pt-1">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                    <span>Verified Submissions</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Target className="w-3.5 h-3.5 text-amber-500" />
                    <span>Algorithmic Rigor</span>
                  </span>
                </div>
              </div>

              {/* Number Count Box */}
              <div className="sm:text-right shrink-0">
                <div className="inline-flex sm:flex-col items-center sm:items-end justify-between sm:justify-center p-3 rounded-2xl bg-brand-50/70 border border-brand-200/60 min-w-[130px]">
                  <div className="text-2xl sm:text-3xl font-black text-brand-700">
                    {platform.count}
                  </div>
                  <div className="text-[11px] font-bold text-brand-600 mt-0.5">
                    {platform.label}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
