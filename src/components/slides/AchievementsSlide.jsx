import React from 'react';
import { achievements } from '../../data/portfolioData';
import { Trophy, Code2, Flame, Award, CheckCircle2, Target, ExternalLink } from 'lucide-react';

export default function AchievementsSlide({ leetCodeStats }) {
  const leetCodeSolved = leetCodeStats?.leetcodeSolved ?? 304;
  const totalSolved = leetCodeStats?.totalSolved ?? 450;

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-5 sm:mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1.5">
          <Trophy className="w-3.5 h-3.5" />
          <span>Slide 07 • Algorithmic Rigor</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Competitive Coding & Achievements
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
          Continuous algorithmic practice to sharpen time complexity analysis, memory optimization, and structured problem solving.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch text-left">
        
        {/* Left Column: Big Total Milestone Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-brand-950/40 relative overflow-hidden border border-brand-500/30 group">
            {/* Background watermarks & glow */}
            <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-brand-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <Trophy className="absolute right-4 top-4 w-24 h-24 text-white/5 pointer-events-none" />

            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold backdrop-blur-md mb-4 border border-white/20">
              <Flame className="w-4 h-4 text-brand-300 animate-pulse" />
              <span>Milestone Achieved</span>
            </div>

            <div className="space-y-1">
              <div className="text-5xl sm:text-6xl font-black tracking-tight text-white flex items-baseline space-x-1">
                <span className="bg-gradient-to-r from-white via-brand-100 to-brand-300 bg-clip-text text-transparent">
                  {totalSolved}+
                </span>
              </div>
              <div className="text-lg font-bold text-brand-200">
                DSA Problems Solved
              </div>
              <p className="text-xs sm:text-sm text-brand-100/90 pt-2 leading-relaxed">
                Active problem solving spanning LeetCode, Skillrack, and Codeforces competitions with clean C++ and Python implementations.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-brand-300/80 block text-[11px] font-semibold">Primary Focus</span>
                <span className="font-extrabold text-white text-sm">Data Structures & Algo</span>
              </div>
              <div>
                <span className="text-brand-300/80 block text-[11px] font-semibold">Core Languages</span>
                <span className="font-extrabold text-white text-sm">Python, C++, C</span>
              </div>
            </div>

          </div>

          {/* Quick Metrics Bar in brand depth */}
          <div className="grid grid-cols-2 gap-3">
            {achievements.stats.map((s, idx) => {
              const displayVal = idx === 0 ? `${totalSolved}+` : s.value;
              return (
                <div 
                  key={idx} 
                  className="glass-card glass-card-hover p-3.5 rounded-2xl border border-brand-300/80 dark:border-brand-800/80 text-left shadow-sm"
                >
                  <div className="text-[11px] text-brand-800/70 dark:text-slate-400 font-bold">{s.label}</div>
                  <div className="text-sm font-black text-brand-950 dark:text-white mt-0.5">{displayVal}</div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: Platform Breakdown Cards */}
        <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
          {achievements.platforms.map((platform, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 group relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400 opacity-80" />

              <div className="space-y-1.5 flex-1 pt-1">
                <div className="flex items-center space-x-2">
                  {platform.url && platform.url !== '#' ? (
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-slate-900 dark:text-white text-lg hover:text-brand-600 dark:hover:text-brand-300 transition-colors inline-flex items-center space-x-1.5"
                      title={`Visit ${platform.name} profile`}
                    >
                      <span>{platform.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 opacity-70 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <span className="font-black text-slate-900 dark:text-white text-lg group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                      {platform.name}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wide bg-brand-100 dark:bg-brand-950 text-brand-900 dark:text-brand-300 border border-brand-300/80 dark:border-brand-800">
                    {platform.name === 'LeetCode' && !leetCodeStats?.loading ? 'Live Synced' : 'Platform'}
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {platform.description}
                </p>
                <div className="flex items-center space-x-3 text-xs text-brand-900/70 dark:text-slate-400 pt-1">
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                    <span className="font-bold">Verified Submissions</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1.5">
                    <Target className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                    <span className="font-bold">Algorithmic Rigor</span>
                  </span>
                </div>
              </div>

              {/* Number Count Box with Specular Depth */}
              <div className="sm:text-right shrink-0">
                <div className="inline-flex sm:flex-col items-center sm:items-end justify-between sm:justify-center p-3.5 rounded-2xl bg-brand-200/60 dark:bg-brand-950/90 border border-brand-300 dark:border-brand-800/90 min-w-[130px] shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-brand-900 dark:text-brand-300 flex items-center sm:justify-end space-x-1.5">
                    <span>{platform.name === 'LeetCode' ? leetCodeSolved : platform.count}</span>
                    {platform.name === 'LeetCode' && !leetCodeStats?.loading && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" title="Live synced from LeetCode" />
                    )}
                  </div>
                  <div className="text-[11px] font-extrabold text-brand-800 dark:text-brand-400 mt-0.5">
                    {platform.label}
                  </div>
                  {platform.name === 'LeetCode' && leetCodeStats?.easySolved > 0 && (
                    <div className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 mt-1 flex items-center space-x-1.5">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{leetCodeStats.easySolved}E</span>
                      <span>•</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">{leetCodeStats.mediumSolved}M</span>
                      <span>•</span>
                      <span className="text-rose-600 dark:text-rose-400 font-bold">{leetCodeStats.hardSolved}H</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
