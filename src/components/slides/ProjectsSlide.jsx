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
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1.5">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Slide 04 • Technical Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured Projects ({projectsList.length})
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Practical software projects developed across Cybersecurity, Artificial Intelligence, Machine Learning, and Web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-0">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 text-white shadow-md shadow-brand-600/35'
                  : 'bg-brand-100/80 hover:bg-brand-200/80 text-brand-950 dark:bg-brand-950/70 dark:text-brand-200 border border-brand-300/80 dark:border-brand-800/80 hover:border-brand-400'
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
              className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md flex flex-col justify-between text-left relative overflow-hidden group"
            >
              {/* Top Accent Line in brand gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400 opacity-90" />

              <div>
                {/* Badge & Icon Row */}
                <div className="flex items-center justify-between mb-3 pt-1">
                  <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wide border shadow-sm ${proj.badgeColor}`}>
                    {proj.category}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-brand-100/80 dark:bg-brand-950/80 group-hover:bg-gradient-to-tr group-hover:from-brand-700 group-hover:to-brand-500 group-hover:text-white text-brand-600 dark:text-brand-400 flex items-center justify-center transition-all duration-300 shadow-sm">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-black text-slate-900 dark:text-white text-base group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>

                {/* Bullets */}
                <div className="mt-3.5 space-y-1.5 border-t border-brand-100 dark:border-brand-900/60 pt-2.5">
                  {proj.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags & GitHub Link */}
              <div className="mt-4 pt-3.5 border-t border-brand-100 dark:border-brand-900/60">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-brand-100/90 dark:bg-brand-950 text-brand-950 dark:text-brand-300 border border-brand-200 dark:border-brand-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group/link transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-800 dark:text-brand-300" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
