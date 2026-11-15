import React, { useState } from 'react';
import { certificationsList } from '../../data/portfolioData';
import { Award, Database, Cloud, Bot, Sparkles, Server, Terminal, LineChart, CheckCircle } from 'lucide-react';

const certIcons = {
  Database: Database,
  Cloud: Cloud,
  Bot: Bot,
  Sparkles: Sparkles,
  Server: Server,
  Terminal: Terminal,
  LineChart: LineChart,
};

export default function CertificationsSlide() {
  const [filter, setFilter] = useState('All');
  const issuers = ['All', 'Oracle University', 'Google Cloud', 'DataCamp', 'Cisco Networking Academy', 'WorldQuant University'];

  const filtered = filter === 'All'
    ? certificationsList
    : certificationsList.filter(c => c.issuer === filter);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 text-left">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Slide 06 • Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Certifications & Cloud Badges ({certificationsList.length})
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Verified technical credentials and skill badges spanning Cloud AI, Database Architecture, Generative AI, and Data Science.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-0">
          {issuers.map((issuer, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(issuer)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                filter === issuer
                  ? 'bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 text-white shadow-md shadow-brand-600/35'
                  : 'bg-brand-100/80 hover:bg-brand-200/80 text-brand-950 dark:bg-brand-950/70 dark:text-brand-200 border border-brand-300/80 dark:border-brand-800/80 hover:border-brand-400'
              }`}
            >
              {issuer.replace(' Networking Academy', '').replace(' University', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-h-[58vh] overflow-y-auto pr-1 text-left">
        {filtered.map((cert, idx) => {
          const IconComp = certIcons[cert.icon] || Award;

          return (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-5 sm:p-6 border border-brand-200/80 dark:border-brand-800/80 shadow-md flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Strip in brand colors */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400 opacity-80" />

              <div>
                <div className="flex items-center justify-between mb-3 pt-1">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${cert.color || 'from-brand-700 to-brand-500'} text-white flex items-center justify-center shadow-lg shadow-brand-600/25 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wide bg-brand-100/90 dark:bg-brand-950/90 text-brand-800 dark:text-brand-300 border border-brand-300/80 dark:border-brand-800/80 shadow-sm">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-black text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <div className="mt-2 text-xs font-bold text-brand-700 dark:text-brand-300">
                  {cert.issuer}
                </div>

                <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                  Issued: {cert.date}
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-brand-100 dark:border-brand-900/60 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {cert.category}
                </span>
                <span className="inline-flex items-center text-brand-600 dark:text-brand-400 font-bold text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  Verified
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
