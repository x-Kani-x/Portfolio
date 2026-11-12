import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { Code, Layout, Wrench, Cpu, Sparkles, Check, Layers } from 'lucide-react';

const iconMap = {
  Code: Code,
  Layout: Layout,
  Wrench: Wrench,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export default function SkillsSlide() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-6 text-left">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
          <Layers className="w-3.5 h-3.5" />
          <span>Slide 03 • Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Technical & Soft Skills Matrix
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
          Core technologies, engineering paradigms, and soft skills cultivated through university coursework, competitive problem solving, and projects.
        </p>
      </div>

      {/* Desktop & Tablet Category Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skillCategories.map((cat, idx) => {
          const IconComponent = iconMap[cat.icon] || Code;
          const isActive = selectedCategory === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 scale-[1.02]'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-brand-300'
              }`}
            >
              <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-600'}`} />
              <span>{cat.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Display & Detailed Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
        
        {/* Category Description Banner */}
        <div className="lg:col-span-4 space-y-4">
          <div className="glass-card rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
              {React.createElement(iconMap[skillCategories[selectedCategory].icon] || Code, { className: "w-6 h-6" })}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {skillCategories[selectedCategory].category}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                {skillCategories[selectedCategory].description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Total Competencies</span>
              <span className="font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md">
                {skillCategories[selectedCategory].skills.length} Skills
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            💡 <strong>Pro Tip:</strong> Click the category tabs above to inspect individual programming languages, web libraries, and core computer science concepts.
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories[selectedCategory].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-brand-600 flex items-center justify-center font-bold">
                  <Check className="w-4 h-4 text-brand-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">
                    {skill.name}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {skill.level} Proficiency
                  </div>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
                {skill.tag}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

