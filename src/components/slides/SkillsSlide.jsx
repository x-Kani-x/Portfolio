import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { Code, Layout, Wrench, Cpu, Sparkles, Check, Layers, ChevronRight } from 'lucide-react';

const iconMap = {
  Code: Code,
  Layout: Layout,
  Wrench: Wrench,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

const levelProgress = {
  Advanced: '92%',
  Proficient: '80%',
  Intermediate: '74%',
  Foundational: '65%',
  Core: '88%',
};

export default function SkillsSlide() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-5 sm:mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1.5">
          <Layers className="w-3.5 h-3.5" />
          <span>Slide 03 • Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Technical & Soft Skills Matrix
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
          Core technologies, engineering paradigms, and soft skills cultivated through university coursework, competitive problem solving, and projects.
        </p>
      </div>

      {/* Category Selector Pills */}
      <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
        {skillCategories.map((cat, idx) => {
          const IconComponent = iconMap[cat.icon] || Code;
          const isActive = selectedCategory === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/35 ring-1 ring-brand-300/40 scale-[1.02]'
                  : 'bg-brand-100/80 hover:bg-brand-200/80 text-brand-950 dark:bg-brand-950/70 dark:text-brand-200 border border-brand-300/80 dark:border-brand-800/80 hover:border-brand-400 shadow-sm'
              }`}
            >
              <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-700 dark:text-brand-400'}`} />
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Display & Detailed Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start text-left">
        
        {/* Category Description Banner */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-card rounded-3xl p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md space-y-4 relative overflow-hidden">
            {/* Ambient radial glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-brand-700 via-brand-600 to-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-600/30">
              {React.createElement(iconMap[skillCategories[selectedCategory].icon] || Code, { className: "w-7 h-7" })}
            </div>
            
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {skillCategories[selectedCategory].category}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                {skillCategories[selectedCategory].description}
              </p>
            </div>

            <div className="pt-3.5 border-t border-brand-100 dark:border-brand-900/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold">Total Competencies</span>
              <span className="font-black text-brand-800 dark:text-brand-200 bg-brand-100/90 dark:bg-brand-950/90 px-3 py-1 rounded-xl border border-brand-200 dark:border-brand-800">
                {skillCategories[selectedCategory].skills.length} Skills
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-100/70 dark:bg-brand-950/70 border border-brand-300/80 dark:border-brand-800/80 text-xs text-brand-950 dark:text-slate-300 shadow-sm">
            <span className="text-brand-700 dark:text-brand-400 font-extrabold">💡 Pro Tip:</span> Click category tabs above to inspect programming languages, web libraries, and core computer science concepts.
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {skillCategories[selectedCategory].skills.map((skill, sIdx) => {
            const width = levelProgress[skill.level] || '80%';
            return (
              <div
                key={sIdx}
                className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 border border-brand-200/80 dark:border-brand-800/80 shadow-md flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-200/80 dark:bg-brand-950/80 text-brand-700 dark:text-brand-400 flex items-center justify-center font-bold group-hover:bg-gradient-to-tr group-hover:from-brand-700 group-hover:to-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                        {skill.name}
                      </div>
                      <div className="text-[11px] text-brand-900/70 dark:text-slate-400 font-medium">
                        {skill.level} Proficiency
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-100 dark:bg-brand-950 text-brand-900 dark:text-brand-300 border border-brand-300/80 dark:border-brand-800/90">
                    {skill.tag}
                  </span>
                </div>

                {/* Depth Mini Progress Gauge in brand color */}
                <div className="mt-3.5 pt-2.5 border-t border-brand-200/80 dark:border-brand-900/60">
                  <div className="w-full bg-brand-200/70 dark:bg-brand-950/80 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 h-full rounded-full transition-all duration-500 group-hover:shadow-sm group-hover:shadow-brand-500"
                      style={{ width }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
