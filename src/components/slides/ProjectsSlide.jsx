import React, { useState } from 'react';
import { projectsList } from '../../data/portfolioData';
import { FolderGit2, Github, ExternalLink, ShieldCheck, Brain, TrendingUp, ScanText, Wallet, CheckCircle2 } from 'lucide-react';

const projectIcons = {
  "Cybersecurity": ShieldCheck,
  "Artificial Intelligence": Brain,
  "Machine Learning": TrendingUp,
  "Deep Learning / ML": ScanText,
  "Personal Finance AI": Wallet,
};

export default function ProjectsSlide() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Cybersecurity', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning / ML', 'Personal Finance AI'];

  const filteredProjects = filter === 'All' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 text-left">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Slide 04 • Technical Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects ({projectsList.length})
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Practical software projects developed across Cybersecurity, Artificial Intelligence, Machine Learning, and Web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-0">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-h-[58vh] overflow-y-auto pr-1">
        {filteredProjects.map((proj, idx) => {
          const IconComp = projectIcons[proj.category] || FolderGit2;

          return (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between text-left relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-indigo-600 opacity-80" />

              <div>
                {/* Badge & Icon Row */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${proj.badgeColor}`}>
                    {proj.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-50 group-hover:text-brand-600 text-slate-600 flex items-center justify-center transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>

                {/* Bullets */}
                <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-2.5">
                  {proj.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-1.5 text-[11px] text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags & GitHub Link */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

